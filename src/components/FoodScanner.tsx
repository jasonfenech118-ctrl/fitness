"use client";

import { useEffect, useState } from "react";
import Anthropic from "@anthropic-ai/sdk";

interface FoodItem {
  name: string;
  portion: string;
  calories: number;
  protein_g: number;
  carbs_g: number;
  fat_g: number;
}

interface ScanResult {
  is_food: boolean;
  meal_name: string;
  items: FoodItem[];
  totals: {
    calories: number;
    protein_g: number;
    carbs_g: number;
    fat_g: number;
  };
  notes: string;
}

const NUTRITION_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["is_food", "meal_name", "items", "totals", "notes"],
  properties: {
    is_food: {
      type: "boolean",
      description: "Whether the image actually contains food or drink",
    },
    meal_name: {
      type: "string",
      description: "Short name for the meal, e.g. 'Grilled chicken with rice'",
    },
    items: {
      type: "array",
      description: "Each distinct food item visible in the image",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["name", "portion", "calories", "protein_g", "carbs_g", "fat_g"],
        properties: {
          name: { type: "string" },
          portion: {
            type: "string",
            description: "Estimated portion size, e.g. '150 g' or '1 cup'",
          },
          calories: { type: "number" },
          protein_g: { type: "number" },
          carbs_g: { type: "number" },
          fat_g: { type: "number" },
        },
      },
    },
    totals: {
      type: "object",
      additionalProperties: false,
      required: ["calories", "protein_g", "carbs_g", "fat_g"],
      properties: {
        calories: { type: "number" },
        protein_g: { type: "number" },
        carbs_g: { type: "number" },
        fat_g: { type: "number" },
      },
    },
    notes: {
      type: "string",
      description:
        "Brief note on estimation confidence or anything unclear in the image",
    },
  },
} as const;

const API_KEY_STORAGE = "pulse_anthropic_api_key";

function resizeImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      const maxDim = 1024;
      const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("Canvas not supported"));
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.85));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not read image"));
    };
    img.src = url;
  });
}

export default function FoodScanner() {
  const [apiKey, setApiKey] = useState("");
  const [keySaved, setKeySaved] = useState(false);
  const [showKeySetup, setShowKeySetup] = useState(false);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(API_KEY_STORAGE);
    if (stored) {
      setApiKey(stored);
      setKeySaved(true);
    } else {
      setShowKeySetup(true);
    }
  }, []);

  function saveKey() {
    if (!apiKey.trim()) return;
    localStorage.setItem(API_KEY_STORAGE, apiKey.trim());
    setKeySaved(true);
    setShowKeySetup(false);
  }

  function clearKey() {
    localStorage.removeItem(API_KEY_STORAGE);
    setApiKey("");
    setKeySaved(false);
    setShowKeySetup(true);
  }

  async function handleFile(file: File | undefined) {
    if (!file) return;
    setResult(null);
    setError(null);
    try {
      const dataUrl = await resizeImage(file);
      setImageDataUrl(dataUrl);
    } catch {
      setError("Could not read that image. Try a different photo.");
    }
  }

  async function analyze() {
    if (!imageDataUrl || !apiKey) return;
    setScanning(true);
    setError(null);
    setResult(null);

    try {
      const client = new Anthropic({
        apiKey: apiKey.trim(),
        dangerouslyAllowBrowser: true,
      });

      const base64 = imageDataUrl.split(",")[1];

      const response = await client.messages.create({
        model: "claude-opus-4-8",
        max_tokens: 2000,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image",
                source: {
                  type: "base64",
                  media_type: "image/jpeg",
                  data: base64,
                },
              },
              {
                type: "text",
                text: "Identify the food in this photo and estimate its nutritional content. List each distinct item with an estimated portion size and its calories, protein, carbs, and fat. Base estimates on typical portion sizes and standard nutritional databases. If the image does not contain food, set is_food to false.",
              },
            ],
          },
        ],
        output_config: {
          format: { type: "json_schema", schema: NUTRITION_SCHEMA },
        },
      });

      const textBlock = response.content.find(
        (b): b is Anthropic.TextBlock => b.type === "text",
      );
      if (!textBlock) throw new Error("Empty response");
      const parsed: ScanResult = JSON.parse(textBlock.text);
      setResult(parsed);
    } catch (err) {
      if (err instanceof Anthropic.AuthenticationError) {
        setError(
          "That API key was rejected. Check it and save it again in settings.",
        );
      } else if (err instanceof Anthropic.RateLimitError) {
        setError("Rate limited — wait a moment and try again.");
      } else if (err instanceof Anthropic.APIError) {
        setError(`The analysis failed (${err.status ?? "error"}). Try again.`);
      } else {
        setError("Something went wrong analyzing the photo. Try again.");
      }
    } finally {
      setScanning(false);
    }
  }

  return (
    <div className="max-w-2xl">
      {/* API key setup */}
      <div className="mb-6">
        {keySaved && !showKeySetup ? (
          <div className="flex items-center gap-3 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-success" />
              AI connected
            </span>
            <button
              onClick={() => setShowKeySetup(true)}
              className="underline hover:text-primary"
            >
              Change key
            </button>
            <button onClick={clearKey} className="underline hover:text-primary">
              Remove key
            </button>
          </div>
        ) : (
          <div className="bg-surface border border-border rounded-3xl p-6">
            <h3 className="font-bold mb-2">Connect the AI</h3>
            <p className="text-sm text-muted mb-4">
              The scanner uses Claude to read your photo. Paste an Anthropic API
              key (from{" "}
              <a
                href="https://console.anthropic.com/"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                console.anthropic.com
              </a>
              ). It&apos;s stored only in this browser — it never leaves your
              device except to call the AI directly.
            </p>
            <div className="flex gap-2">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-ant-..."
                className="flex-1 px-4 py-2.5 bg-background border border-border rounded-full text-sm focus:outline-none focus:border-primary"
              />
              <button
                onClick={saveKey}
                disabled={!apiKey.trim()}
                className="bg-primary hover:bg-primary-dark disabled:opacity-40 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Photo input */}
      <div className="bg-surface border border-border rounded-3xl p-6">
        <label className="block cursor-pointer">
          <input
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
          {imageDataUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={imageDataUrl}
              alt="Your meal"
              className="w-full max-h-80 object-contain rounded-2xl bg-surface-dark"
            />
          ) : (
            <div className="border-2 border-dashed border-border rounded-2xl py-16 text-center hover:border-primary/50 transition-colors">
              <svg
                className="w-10 h-10 mx-auto mb-3 text-muted"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                />
              </svg>
              <div className="font-semibold text-sm">
                Take a photo or choose one
              </div>
              <div className="text-xs text-muted mt-1">
                Snap your plate and let the AI do the math
              </div>
            </div>
          )}
        </label>

        {imageDataUrl && (
          <div className="flex gap-2 mt-4">
            <button
              onClick={analyze}
              disabled={scanning || !keySaved}
              className="flex-1 bg-primary hover:bg-primary-dark disabled:opacity-40 text-white py-3 rounded-full font-semibold transition-colors"
            >
              {scanning ? "Analyzing…" : "Scan Nutrition"}
            </button>
            <button
              onClick={() => {
                setImageDataUrl(null);
                setResult(null);
                setError(null);
              }}
              className="px-5 py-3 border border-border rounded-full text-sm font-semibold hover:border-primary transition-colors"
            >
              Clear
            </button>
          </div>
        )}
        {!keySaved && imageDataUrl && (
          <p className="text-xs text-muted mt-2">
            Connect the AI above to enable scanning.
          </p>
        )}
      </div>

      {error && (
        <div className="mt-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 rounded-2xl px-5 py-4 text-sm">
          {error}
        </div>
      )}

      {/* Results */}
      {result && !result.is_food && (
        <div className="mt-4 bg-surface border border-border rounded-2xl px-5 py-4 text-sm text-muted">
          That doesn&apos;t look like food. Try a photo of a meal or snack.
        </div>
      )}

      {result && result.is_food && (
        <div className="mt-6 bg-surface border border-border rounded-3xl overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="text-xl font-bold">{result.meal_name}</h3>
            {result.notes && (
              <p className="text-xs text-muted mt-1">{result.notes}</p>
            )}
          </div>

          <div className="grid grid-cols-4 divide-x divide-border border-b border-border text-center">
            <div className="py-4">
              <div className="text-2xl font-black text-primary">
                {Math.round(result.totals.calories)}
              </div>
              <div className="text-xs text-muted">calories</div>
            </div>
            <div className="py-4">
              <div className="text-2xl font-black">
                {Math.round(result.totals.protein_g)}g
              </div>
              <div className="text-xs text-muted">protein</div>
            </div>
            <div className="py-4">
              <div className="text-2xl font-black">
                {Math.round(result.totals.carbs_g)}g
              </div>
              <div className="text-xs text-muted">carbs</div>
            </div>
            <div className="py-4">
              <div className="text-2xl font-black">
                {Math.round(result.totals.fat_g)}g
              </div>
              <div className="text-xs text-muted">fat</div>
            </div>
          </div>

          <div className="divide-y divide-border">
            {result.items.map((item, i) => (
              <div key={i} className="px-6 py-3 flex items-center justify-between text-sm">
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-xs text-muted">{item.portion}</div>
                </div>
                <div className="text-right text-xs text-muted">
                  <span className="font-bold text-foreground text-sm">
                    {Math.round(item.calories)} cal
                  </span>
                  <div>
                    P {Math.round(item.protein_g)}g · C {Math.round(item.carbs_g)}g · F{" "}
                    {Math.round(item.fat_g)}g
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="px-6 py-3 bg-surface-dark text-xs text-muted">
            Estimates only — actual values vary with ingredients and portions.
          </div>
        </div>
      )}
    </div>
  );
}

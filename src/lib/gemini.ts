// Central Gemini client for all AI features on the site.
// Key resolution: build-time NEXT_PUBLIC_GEMINI_API_KEY (set via GitHub
// Actions secret) first, then a key the visitor saved in this browser.

export const GEMINI_KEY_STORAGE = "pulse_gemini_api_key";

const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

export function getBuiltInKey(): string {
  return process.env.NEXT_PUBLIC_GEMINI_API_KEY ?? "";
}

export function getStoredKey(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(GEMINI_KEY_STORAGE) ?? "";
}

export function getGeminiKey(): string {
  return getBuiltInKey() || getStoredKey();
}

export class GeminiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

interface GenerateOptions {
  prompt: string;
  imageBase64?: string;
  imageMimeType?: string;
  responseSchema?: object;
}

export async function geminiGenerate({
  prompt,
  imageBase64,
  imageMimeType = "image/jpeg",
  responseSchema,
}: GenerateOptions): Promise<string> {
  const apiKey = getGeminiKey();
  if (!apiKey) throw new GeminiError(401, "No API key configured");

  const parts: object[] = [];
  if (imageBase64) {
    parts.push({ inline_data: { mime_type: imageMimeType, data: imageBase64 } });
  }
  parts.push({ text: prompt });

  const body: Record<string, unknown> = {
    contents: [{ parts }],
  };
  if (responseSchema) {
    body.generationConfig = {
      responseMimeType: "application/json",
      responseSchema,
    };
  }

  const res = await fetch(GEMINI_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    let message = res.statusText;
    try {
      const err = await res.json();
      message = err?.error?.message ?? message;
    } catch {
      // keep statusText
    }
    throw new GeminiError(res.status, message);
  }

  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts
    ?.map((p: { text?: string }) => p.text ?? "")
    .join("");
  if (!text) throw new GeminiError(500, "Empty response from Gemini");
  return text;
}

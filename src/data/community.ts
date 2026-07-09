export interface ForumPost {
  id: string;
  title: string;
  author: string;
  authorLevel: string;
  category: string;
  content: string;
  replies: number;
  views: number;
  lastActivity: string;
  pinned?: boolean;
}

export interface Transformation {
  id: string;
  name: string;
  age: number;
  duration: string;
  beforeWeight: string;
  afterWeight: string;
  quote: string;
  story: string;
}

export const forumCategories = [
  { name: "Training", count: 1245, description: "Discuss workout routines, training methods, and exercise tips" },
  { name: "Nutrition & Diet", count: 892, description: "Share meal plans, recipes, and nutrition advice" },
  { name: "Supplements", count: 567, description: "Reviews and discussions about supplements" },
  { name: "Progress Logs", count: 2341, description: "Track your fitness journey and share results" },
  { name: "Bodybuilding", count: 723, description: "Competition prep, posing, and bodybuilding lifestyle" },
  { name: "Powerlifting", count: 456, description: "Meet prep, programming, and strength records" },
  { name: "Weight Loss", count: 1089, description: "Support and strategies for losing weight" },
  { name: "General Discussion", count: 3456, description: "Off-topic and general fitness discussions" },
];

export const forumPosts: ForumPost[] = [
  {
    id: "1",
    title: "My 12-Week PPL Transformation Results (Before/After Inside)",
    author: "IronMike92",
    authorLevel: "Elite Member",
    category: "Progress Logs",
    content: "Just finished my 12-week PPL program and I'm blown away by the results. Started at 175 lbs and I'm now sitting at 185 lbs with visible abs. Here's what I did differently this time...",
    replies: 47,
    views: 2341,
    lastActivity: "2 hours ago",
    pinned: true,
  },
  {
    id: "2",
    title: "Best exercises for a lagging chest? Need advice",
    author: "GymNewbie2026",
    authorLevel: "New Member",
    category: "Training",
    content: "My chest is definitely my weakest body part. I've been doing flat bench and flyes but not seeing much progress. Any recommendations for exercises that helped you grow your chest?",
    replies: 23,
    views: 856,
    lastActivity: "45 min ago",
  },
  {
    id: "3",
    title: "Creatine loading phase - necessary or waste of time?",
    author: "ScienceBased_Lifter",
    authorLevel: "Senior Member",
    category: "Supplements",
    content: "I keep seeing conflicting information about whether a creatine loading phase is necessary. Some say 20g/day for a week, others say just take 5g/day from the start. What does the research actually say?",
    replies: 34,
    views: 1203,
    lastActivity: "1 hour ago",
  },
  {
    id: "4",
    title: "High protein meal prep ideas under $50/week",
    author: "BudgetBulker",
    authorLevel: "Regular Member",
    category: "Nutrition & Diet",
    content: "Looking for affordable meal prep ideas that still hit 180-200g protein daily. Currently spending way too much on food. Share your budget-friendly high-protein meals!",
    replies: 56,
    views: 3421,
    lastActivity: "30 min ago",
    pinned: true,
  },
  {
    id: "5",
    title: "First powerlifting meet next month - any tips?",
    author: "StrengthSeeker",
    authorLevel: "Regular Member",
    category: "Powerlifting",
    content: "Competing in my first powerlifting meet in 4 weeks. Current maxes: Squat 405, Bench 275, Deadlift 475. Any advice on meet day strategy, attempt selection, or things I should know?",
    replies: 18,
    views: 654,
    lastActivity: "3 hours ago",
  },
  {
    id: "6",
    title: "How I lost 80 lbs in 10 months - my complete journey",
    author: "NewLifeNewMe",
    authorLevel: "Senior Member",
    category: "Weight Loss",
    content: "A year ago I weighed 300 lbs and couldn't walk up stairs without getting winded. Today I'm 220 lbs, deadlifting 315, and running 5Ks. Here's exactly how I did it, week by week...",
    replies: 89,
    views: 5678,
    lastActivity: "15 min ago",
  },
  {
    id: "7",
    title: "Natural bodybuilding competition prep guide (16 weeks out)",
    author: "NattyKing",
    authorLevel: "Elite Member",
    category: "Bodybuilding",
    content: "Starting my 16-week prep for my first natural bodybuilding show. I'll be documenting everything - diet, training, cardio, supplements, and weekly progress photos.",
    replies: 42,
    views: 1876,
    lastActivity: "4 hours ago",
  },
  {
    id: "8",
    title: "What's your current gym playlist? Share your pump-up songs",
    author: "LiftWithBeats",
    authorLevel: "Regular Member",
    category: "General Discussion",
    content: "My current playlist is getting stale and I need new music for heavy lifting days. Drop your best gym songs below!",
    replies: 112,
    views: 4321,
    lastActivity: "5 min ago",
  },
];

export const transformations: Transformation[] = [
  {
    id: "1",
    name: "Marcus J.",
    age: 28,
    duration: "12 months",
    beforeWeight: "245 lbs",
    afterWeight: "185 lbs",
    quote: "The gym didn't just change my body, it changed my entire life.",
    story: "After years of being overweight, Marcus committed to a complete lifestyle transformation. Starting with just walking and basic compound movements, he gradually built up to an intense 5-day training split. Combined with a structured meal plan, he lost 60 lbs while building significant muscle.",
  },
  {
    id: "2",
    name: "Sarah K.",
    age: 32,
    duration: "8 months",
    beforeWeight: "155 lbs",
    afterWeight: "135 lbs",
    quote: "Strength training made me realize I'm capable of so much more than I thought.",
    story: "Sarah started her fitness journey after her second child. Initially intimidated by the weight room, she began with bodyweight exercises and gradually progressed to heavy compound lifts. She now deadlifts over 200 lbs and has completely transformed her physique.",
  },
  {
    id: "3",
    name: "David R.",
    age: 24,
    duration: "18 months",
    beforeWeight: "140 lbs",
    afterWeight: "180 lbs",
    quote: "Going from skinny to strong was the best decision I ever made.",
    story: "As a classic 'hardgainer,' David struggled to put on weight for years. With a structured bulking program and consistent training, he gained 40 lbs of lean mass. His key was tracking every meal and progressive overload on compound lifts.",
  },
  {
    id: "4",
    name: "Lisa M.",
    age: 38,
    duration: "6 months",
    beforeWeight: "180 lbs",
    afterWeight: "150 lbs",
    quote: "At 38, I'm in the best shape of my life. It's never too late to start.",
    story: "Lisa proved that age is just a number. After turning 38, she decided to prioritize her health. Following a body recomposition program with both strength training and strategic cardio, she lost 30 lbs and discovered a passion for powerlifting.",
  },
];

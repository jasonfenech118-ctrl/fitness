export interface WorkoutPlan {
  id: string;
  name: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  goal: string;
  daysPerWeek: number;
  split: string;
  schedule: WorkoutDay[];
  category: string;
}

export interface WorkoutDay {
  day: string;
  name: string;
  exercises: WorkoutExercise[];
}

export interface WorkoutExercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
}

export const workoutPlans: WorkoutPlan[] = [
  {
    id: "ppl-hypertrophy",
    name: "Push/Pull/Legs Hypertrophy",
    description:
      "A classic 6-day PPL split designed for maximum muscle growth. Each muscle group is trained twice per week with high volume.",
    duration: "12 weeks",
    level: "Intermediate",
    goal: "Muscle Growth",
    daysPerWeek: 6,
    split: "Push/Pull/Legs",
    category: "Hypertrophy",
    schedule: [
      {
        day: "Day 1",
        name: "Push (Chest/Shoulders/Triceps)",
        exercises: [
          { name: "Barbell Bench Press", sets: 4, reps: "8-10", rest: "90s" },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: "10-12",
            rest: "75s",
          },
          { name: "Overhead Press", sets: 4, reps: "8-10", rest: "90s" },
          { name: "Lateral Raises", sets: 4, reps: "12-15", rest: "60s" },
          { name: "Skull Crushers", sets: 3, reps: "10-12", rest: "60s" },
          {
            name: "Tricep Rope Pushdowns",
            sets: 3,
            reps: "12-15",
            rest: "60s",
          },
        ],
      },
      {
        day: "Day 2",
        name: "Pull (Back/Biceps)",
        exercises: [
          { name: "Deadlift", sets: 4, reps: "5-6", rest: "120s" },
          { name: "Pull-Ups", sets: 4, reps: "8-10", rest: "90s" },
          { name: "Barbell Rows", sets: 4, reps: "8-10", rest: "90s" },
          { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60s" },
          { name: "Barbell Curls", sets: 3, reps: "10-12", rest: "60s" },
          { name: "Hammer Curls", sets: 3, reps: "10-12", rest: "60s" },
        ],
      },
      {
        day: "Day 3",
        name: "Legs (Quads/Hamstrings/Glutes)",
        exercises: [
          { name: "Barbell Back Squat", sets: 4, reps: "6-8", rest: "120s" },
          { name: "Romanian Deadlift", sets: 4, reps: "8-10", rest: "90s" },
          { name: "Leg Press", sets: 3, reps: "10-12", rest: "90s" },
          {
            name: "Walking Lunges",
            sets: 3,
            reps: "12 per leg",
            rest: "60s",
          },
          { name: "Leg Curls", sets: 3, reps: "12-15", rest: "60s" },
          { name: "Calf Raises", sets: 4, reps: "15-20", rest: "45s" },
        ],
      },
    ],
  },
  {
    id: "upper-lower",
    name: "Upper/Lower Power & Hypertrophy",
    description:
      "A 4-day program that combines heavy compound lifts with hypertrophy work. Perfect for building strength and size simultaneously.",
    duration: "10 weeks",
    level: "Intermediate",
    goal: "Strength & Size",
    daysPerWeek: 4,
    split: "Upper/Lower",
    category: "Strength",
    schedule: [
      {
        day: "Day 1",
        name: "Upper Power",
        exercises: [
          { name: "Barbell Bench Press", sets: 5, reps: "5", rest: "180s" },
          { name: "Barbell Rows", sets: 5, reps: "5", rest: "180s" },
          { name: "Overhead Press", sets: 3, reps: "6-8", rest: "120s" },
          {
            name: "Weighted Pull-Ups",
            sets: 3,
            reps: "6-8",
            rest: "120s",
          },
          { name: "Barbell Curls", sets: 2, reps: "8-10", rest: "60s" },
          { name: "Skull Crushers", sets: 2, reps: "8-10", rest: "60s" },
        ],
      },
      {
        day: "Day 2",
        name: "Lower Power",
        exercises: [
          { name: "Barbell Back Squat", sets: 5, reps: "5", rest: "180s" },
          { name: "Deadlift", sets: 3, reps: "5", rest: "180s" },
          { name: "Leg Press", sets: 3, reps: "8-10", rest: "120s" },
          { name: "Leg Curls", sets: 3, reps: "8-10", rest: "90s" },
          {
            name: "Standing Calf Raises",
            sets: 4,
            reps: "10-12",
            rest: "60s",
          },
          { name: "Hanging Leg Raises", sets: 3, reps: "12-15", rest: "60s" },
        ],
      },
      {
        day: "Day 3",
        name: "Upper Hypertrophy",
        exercises: [
          {
            name: "Incline Dumbbell Press",
            sets: 4,
            reps: "10-12",
            rest: "75s",
          },
          { name: "Cable Rows", sets: 4, reps: "10-12", rest: "75s" },
          { name: "Dumbbell Lateral Raises", sets: 4, reps: "12-15", rest: "60s" },
          { name: "Cable Flyes", sets: 3, reps: "12-15", rest: "60s" },
          { name: "Hammer Curls", sets: 3, reps: "12-15", rest: "60s" },
          {
            name: "Overhead Tricep Extension",
            sets: 3,
            reps: "12-15",
            rest: "60s",
          },
        ],
      },
      {
        day: "Day 4",
        name: "Lower Hypertrophy",
        exercises: [
          {
            name: "Front Squat",
            sets: 4,
            reps: "8-10",
            rest: "120s",
          },
          { name: "Romanian Deadlift", sets: 4, reps: "10-12", rest: "90s" },
          { name: "Hip Thrusts", sets: 4, reps: "10-12", rest: "75s" },
          {
            name: "Walking Lunges",
            sets: 3,
            reps: "12 per leg",
            rest: "60s",
          },
          { name: "Leg Extensions", sets: 3, reps: "12-15", rest: "60s" },
          {
            name: "Seated Calf Raises",
            sets: 4,
            reps: "15-20",
            rest: "45s",
          },
        ],
      },
    ],
  },
  {
    id: "full-body-beginner",
    name: "Full Body Beginner Program",
    description:
      "The perfect starting point for anyone new to weight training. Learn proper form with fundamental compound movements.",
    duration: "8 weeks",
    level: "Beginner",
    goal: "Build Foundation",
    daysPerWeek: 3,
    split: "Full Body",
    category: "Beginner",
    schedule: [
      {
        day: "Day 1",
        name: "Full Body A",
        exercises: [
          { name: "Barbell Back Squat", sets: 3, reps: "8-10", rest: "120s" },
          { name: "Barbell Bench Press", sets: 3, reps: "8-10", rest: "90s" },
          { name: "Barbell Rows", sets: 3, reps: "8-10", rest: "90s" },
          { name: "Overhead Press", sets: 3, reps: "8-10", rest: "90s" },
          { name: "Plank", sets: 3, reps: "30-45 sec", rest: "60s" },
        ],
      },
      {
        day: "Day 2",
        name: "Full Body B",
        exercises: [
          { name: "Deadlift", sets: 3, reps: "6-8", rest: "120s" },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: "10-12",
            rest: "90s",
          },
          { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "90s" },
          { name: "Leg Press", sets: 3, reps: "10-12", rest: "90s" },
          { name: "Barbell Curls", sets: 2, reps: "10-12", rest: "60s" },
          { name: "Skull Crushers", sets: 2, reps: "10-12", rest: "60s" },
        ],
      },
    ],
  },
  {
    id: "powerlifting",
    name: "Powerlifting Strength Program",
    description:
      "Focused on the big three: Squat, Bench Press, and Deadlift. Built for maximal strength gains with periodized loading.",
    duration: "16 weeks",
    level: "Advanced",
    goal: "Maximal Strength",
    daysPerWeek: 4,
    split: "Powerlifting",
    category: "Strength",
    schedule: [
      {
        day: "Day 1",
        name: "Squat Focus",
        exercises: [
          {
            name: "Barbell Back Squat",
            sets: 5,
            reps: "3-5",
            rest: "240s",
          },
          { name: "Pause Squats", sets: 3, reps: "3", rest: "180s" },
          { name: "Leg Press", sets: 3, reps: "8-10", rest: "120s" },
          { name: "Leg Curls", sets: 3, reps: "10-12", rest: "90s" },
          { name: "Plank", sets: 3, reps: "60 sec", rest: "60s" },
        ],
      },
      {
        day: "Day 2",
        name: "Bench Focus",
        exercises: [
          { name: "Barbell Bench Press", sets: 5, reps: "3-5", rest: "240s" },
          { name: "Close-Grip Bench Press", sets: 3, reps: "6-8", rest: "180s" },
          { name: "Overhead Press", sets: 3, reps: "6-8", rest: "120s" },
          { name: "Tricep Dips", sets: 3, reps: "8-12", rest: "90s" },
          { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60s" },
        ],
      },
      {
        day: "Day 3",
        name: "Deadlift Focus",
        exercises: [
          { name: "Deadlift", sets: 5, reps: "3-5", rest: "240s" },
          { name: "Deficit Deadlifts", sets: 3, reps: "3-5", rest: "180s" },
          { name: "Barbell Rows", sets: 4, reps: "6-8", rest: "120s" },
          { name: "Pull-Ups", sets: 3, reps: "8-10", rest: "90s" },
          { name: "Barbell Curls", sets: 3, reps: "10-12", rest: "60s" },
        ],
      },
      {
        day: "Day 4",
        name: "Accessory Day",
        exercises: [
          { name: "Front Squat", sets: 3, reps: "6-8", rest: "120s" },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: "8-10",
            rest: "90s",
          },
          { name: "Romanian Deadlift", sets: 3, reps: "8-10", rest: "90s" },
          { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60s" },
          {
            name: "Hanging Leg Raises",
            sets: 3,
            reps: "12-15",
            rest: "60s",
          },
        ],
      },
    ],
  },
  {
    id: "body-recomp",
    name: "Body Recomposition",
    description:
      "Designed to simultaneously build muscle and lose fat. High intensity training with strategic cardio integration.",
    duration: "12 weeks",
    level: "Intermediate",
    goal: "Lose Fat & Build Muscle",
    daysPerWeek: 5,
    split: "Upper/Lower/Full",
    category: "Fat Loss",
    schedule: [
      {
        day: "Day 1",
        name: "Upper Strength",
        exercises: [
          { name: "Barbell Bench Press", sets: 4, reps: "6-8", rest: "120s" },
          { name: "Pull-Ups", sets: 4, reps: "6-8", rest: "120s" },
          { name: "Overhead Press", sets: 3, reps: "8-10", rest: "90s" },
          { name: "Barbell Rows", sets: 3, reps: "8-10", rest: "90s" },
          { name: "Dumbbell Curls", sets: 2, reps: "12-15", rest: "60s" },
          {
            name: "Tricep Pushdowns",
            sets: 2,
            reps: "12-15",
            rest: "60s",
          },
        ],
      },
      {
        day: "Day 2",
        name: "Lower Strength",
        exercises: [
          { name: "Barbell Back Squat", sets: 4, reps: "6-8", rest: "120s" },
          { name: "Romanian Deadlift", sets: 4, reps: "8-10", rest: "90s" },
          { name: "Hip Thrusts", sets: 3, reps: "10-12", rest: "75s" },
          { name: "Walking Lunges", sets: 3, reps: "10 per leg", rest: "60s" },
          { name: "Calf Raises", sets: 4, reps: "15-20", rest: "45s" },
        ],
      },
      {
        day: "Day 3",
        name: "HIIT Cardio + Core",
        exercises: [
          { name: "Battle Ropes", sets: 6, reps: "30 sec on/30 off", rest: "30s" },
          { name: "Box Jumps", sets: 4, reps: "10", rest: "60s" },
          { name: "Kettlebell Swings", sets: 4, reps: "15", rest: "45s" },
          { name: "Hanging Leg Raises", sets: 3, reps: "15", rest: "60s" },
          { name: "Plank", sets: 3, reps: "45 sec", rest: "30s" },
        ],
      },
    ],
  },
];

export function getWorkoutById(id: string): WorkoutPlan | undefined {
  return workoutPlans.find((w) => w.id === id);
}

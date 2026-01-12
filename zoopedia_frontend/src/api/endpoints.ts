import { apiFetch } from "./client";

export type PuzzleStatus = "IN_PROGRESS" | "WON" | "LOST";

export type PuzzleState = {
  date: string;                 // "YYYY-MM-DD"
  lives_left: number;
  guesses: string[];
  hints_unlocked: string[];     // already-unlocked hints
  status: PuzzleStatus;
};

export type GuessResponse = PuzzleState;

export type LeaderboardEntry = {
  rank: number;
  name: string;        // e.g., "Guest" or username
  score: number;       // define on backend (lives/time/etc)
  guesses_used: number;
};

export async function getTodayPuzzle() {
  return apiFetch<PuzzleState>("/api/puzzle/today");
}

export async function submitTodayGuess(guess: string) {
  return apiFetch<GuessResponse>("/api/puzzle/today/guess", {
    method: "POST",
    body: JSON.stringify({ guess }),
  });
}

export async function getDailyLeaderboard() {
  return apiFetch<LeaderboardEntry[]>("/api/leaderboard/daily");
}

export async function getOverallLeaderboard() {
  return apiFetch<LeaderboardEntry[]>("/api/leaderboard/overall");
}

// Utility functions for formatting
export const formatDate = (date: Date) => {
  return date.toLocaleDateString();
};

export const formatScore = (score: number) => {
  return score.toString();
};
export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

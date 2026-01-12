export const calculateScore = (attempts: number, time: number) => {
  const baseScore = 100;
  const attemptPenalty = attempts * 10;
  const timeBonus = Math.max(0, 60 - time); // Bonus for quick answers
  return Math.max(0, baseScore - attemptPenalty + timeBonus);
};
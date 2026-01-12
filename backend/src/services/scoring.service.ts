// For now we’re NOT doing leaderboard scores.
// This can be extended later when you add time/guess scoring.

export function isCorrectGuess(
  guessNormalized: string,
  answerNormalized: string,
  aliasesNormalized: string[]
) {
  if (guessNormalized === answerNormalized) return true;
  return aliasesNormalized.includes(guessNormalized);
}

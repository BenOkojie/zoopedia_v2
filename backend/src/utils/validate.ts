export const validateGuess = (guess: string) => {
  if (!guess || typeof guess !== 'string') {
    throw new Error('Invalid guess');
  }
  return guess.trim().toLowerCase();
};
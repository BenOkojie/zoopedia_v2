import { useState, useEffect } from 'react';

interface Puzzle {
  id: string;
  question: string;
  hints: string[];
}

export const usePuzzle = () => {
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);

  useEffect(() => {
    // Fetch puzzle from API
    // setPuzzle(fetchedPuzzle);
  }, []);

  return puzzle;
};
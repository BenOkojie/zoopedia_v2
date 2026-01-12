import { Request, Response } from 'express';
import { getDailyPuzzle, checkGuess } from '../services/puzzle.service';

export const getPuzzle = async (req: Request, res: Response) => {
  try {
    const puzzle = await getDailyPuzzle();
    res.json(puzzle);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get puzzle' });
  }
};

export const submitGuess = async (req: Request, res: Response) => {
  try {
    const { guess } = req.body;
    const result = await checkGuess(guess);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit guess' });
  }
};
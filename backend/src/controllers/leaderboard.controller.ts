import { Request, Response } from 'express';
import { getTopScores } from '../services/leaderboard.service';

export const getLeaderboard = async (req: Request, res: Response) => {
  try {
    const leaderboard = await getTopScores();
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get leaderboard' });
  }
};
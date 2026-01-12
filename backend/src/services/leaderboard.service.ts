import { prisma } from '../db/prisma';

export const getTopScores = async () => {
  // Logic to get top scores
  return [
    { name: 'Player1', score: 100 },
    { name: 'Player2', score: 90 },
  ];
};
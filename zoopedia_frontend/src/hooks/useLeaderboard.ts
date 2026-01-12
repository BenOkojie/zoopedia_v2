import { useState, useEffect } from 'react';

interface LeaderboardEntry {
  name: string;
  score: number;
}

export const useLeaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    // Fetch leaderboard from API
    // setLeaderboard(fetchedData);
  }, []);

  return leaderboard;
};
import { useQuery } from "@tanstack/react-query";
import { getDailyLeaderboard, getOverallLeaderboard } from "../api/endpoints";

export function useLeaderboard(type: "daily" | "overall") {
  return useQuery({
    queryKey: ["leaderboard", type],
    queryFn: type === "daily" ? getDailyLeaderboard : getOverallLeaderboard,
    staleTime: type === "daily" ? 30_000 : 120_000,
  });
}

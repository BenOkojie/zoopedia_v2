import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodayPuzzle, submitTodayGuess } from "../api/endpoints";

export function usePuzzle() {
  return useQuery({
    queryKey: ["puzzle", "today"],
    queryFn: getTodayPuzzle,
  });
}

export function useSubmitGuess() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async ({ guess }: { guess: string }) => submitTodayGuess(guess),
    onSuccess: (data) => {
      // Update the cache so UI updates instantly
      qc.setQueryData(["puzzle", "today"], data);
    },
  });
}

import { z } from "zod";

export const guessSchema = z.object({
  guess: z.string().min(1).max(64),
});

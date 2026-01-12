import { DateTime } from "luxon";
import { env } from "../config/env";

// We avoid JS Date timezone pitfalls using Luxon
export function todayKey(): string {
  return DateTime.now().setZone(env.TIMEZONE).toISODate()!; // "YYYY-MM-DD"
}

export function secondsUntilEndOfDay(): number {
  const now = DateTime.now().setZone(env.TIMEZONE);
  const end = now.endOf("day");
  return Math.max(60, Math.floor(end.diff(now, "seconds").seconds));
}

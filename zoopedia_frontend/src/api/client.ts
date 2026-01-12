import { env } from "../lib/env";
import { getGuestId } from "../hooks/useGuestId";

export async function apiFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const guestId = getGuestId();

  const res = await fetch(`${env.apiBaseUrl}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "X-Guest-Id": guestId,
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed: ${res.status}`);
  }

  return res.json() as Promise<T>;
}

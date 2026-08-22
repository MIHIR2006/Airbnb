import type { Listing } from "./types";

const API_URL = process.env.API_URL ?? "http://localhost:4000";

export async function getListing(id: string): Promise<Listing> {
  const res = await fetch(`${API_URL}/api/listings/${id}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to fetch listing ${id}: ${res.status}`);
  }
  return res.json();
}

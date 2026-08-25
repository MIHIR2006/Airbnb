import type { Listing } from "./types";

function baseUrl() {
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export async function getListing(id: string): Promise<Listing> {
  const res = await fetch(`${baseUrl()}/api/listings/${id}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to fetch listing ${id}: ${res.status}`);
  }
  return res.json();
}

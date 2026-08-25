import type { Listing } from "./types";
import data from "@/data/listing.json";

const listing = data as Listing;

export function getListingById(id: string): Listing | null {
  return listing.id === id ? listing : null;
}

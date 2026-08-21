import { Router } from "express";
import listing from "../data/listing.json" with { type: "json" };

export const listingsRouter = Router();

listingsRouter.get("/:id", (req, res) => {
  if (req.params.id !== listing.id) {
    res.status(404).json({ error: "Listing not found" });
    return;
  }
  res.json(listing);
});

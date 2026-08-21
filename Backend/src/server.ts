import cors from "cors";
import express from "express";
import { listingsRouter } from "./routes/listings.js";

const app = express();
const port = process.env.PORT ?? 4000;

app.use(cors());
app.use("/api/listings", listingsRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(port, () => {
  console.log(`api listening on http://localhost:${port}`);
});

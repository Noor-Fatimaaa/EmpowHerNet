import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/empowhernet";

async function start() {
  try {
    await mongoose.connect(mongoUri);
    const port = Number(process.env.PORT || 4000);
    app.listen(port, () => console.log(`API listening on :${port}`));
  } catch (err) {
    console.error("Failed to start API:", err);
    process.exit(1);
  }
}

start();


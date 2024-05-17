import express from "express";
import mongoose from "mongoose";
import router from "./routes/route";
import dotenv from "dotenv";
const cors = require("cors");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

const mongoUri = process.env.MONGODB_URI;
mongoose
  .connect(mongoUri as string)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

app.use(express.json());

app.use("/api", router);

export default app;

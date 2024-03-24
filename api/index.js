import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import db from "./config/db/index.js";
import cookieParser from "cookie-parser";

dotenv.config();

db();

const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = 3006;

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

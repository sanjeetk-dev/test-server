import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
dotenv.config()
import errorHandler from "./middlewares/errorHandler.middleware.js";
const app = express();

app.use(express.json({ limit: "16kb" })); // JSON Parsing
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // URL-Encoded Data

    app.use(cors({
      origin: "*",
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    }))
    
app.use(morgan("dev"))

// API Routes


app.get("/", (req, res) => {
  res.status(200).json({
    message: "WORKING FINE 😀",
    success: true,
  });
});

app.use(errorHandler);

export default app;
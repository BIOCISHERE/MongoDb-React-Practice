import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

import productRoutes from "./routes/product.route.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
app.disable("x-powered-by");

app.use(express.json()); // Allows to accept JSON data in the req.body
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // Allows cookies to be going back to one host to another
app.use(
  cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = ["http://localhost:8080", "http://localhost:5173"];

      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not Allowed by CORS"));
      }
    },
  })
);

app.use("/api/products", productRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});

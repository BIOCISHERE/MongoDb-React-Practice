import express from "express";
import {
  addFavorite,
  getProfile,
  loginUser,
  registerUser,
  removeFavorite,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile", getProfile);

router.post("/register", registerUser);

router.post("/login", loginUser);

router.put("/a-favorites", addFavorite);

router.put("/r-favorites", removeFavorite);

export default router;

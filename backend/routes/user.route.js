import express from "express";
import { getProfile, loginUser, registerUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile", getProfile);

router.post("/register", registerUser);

router.post("/login", loginUser);

export default router;

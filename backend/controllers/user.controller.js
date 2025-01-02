import mongoose from "mongoose";
import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log("Error in fetching users:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      res.status(400).json({ success: false, message: "Name is required" });
    }

    if (!password || password.length < 6) {
      res.status(400).json({
        success: false,
        message: "Password is required and should be at least 6 characters long",
      });
    }

    const doesExist = await User.findOne({ email });
    if (doesExist) {
      res.status(400).json({ success: false, message: "Email is already registered" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ success: true, message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

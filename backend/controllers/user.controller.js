import mongoose from "mongoose";
import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.json({ success: true, data: user });
  } catch (error) {
    console.log("Error in fetching users:", error.message);
    res.json({ success: false, message: "Server Error" });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.json({ success: false, message: "Name is required" });
    }

    if (email == "") {
      return res.json({ success: false, message: "Email is required" });
    }

    const doesExist = await User.findOne({ email });
    if (doesExist) {
      return res.json({ success: false, message: "Email is already registered" });
    }

    if (!password || password.length < 6) {
      return res.json({
        success: false,
        message: "Password is required and should be at least 6 characters long",
      });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    return res.json({ success: true, message: "User created successfully" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Server error" });
  }
};

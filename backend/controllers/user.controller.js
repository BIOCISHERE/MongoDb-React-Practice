import { comparePassword, hashPassword } from "../auth.js";
import User from "../models/user.model.js";

// Return all users endpoint
export const getUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.json({ success: true, data: user });
  } catch (error) {
    console.log("Error in fetching users:", error.message);
    res.json({ success: false, message: "Server Error" });
  }
};

// Sign up endpoint
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if name was entered
    if (!name) {
      return res.json({ success: false, message: "Name is required" });
    }
    // Check if the email is a empty string
    if (email == "") {
      return res.json({ success: false, message: "Email is required" });
    }
    // Check if email is already taken
    const doesExist = await User.findOne({ email });
    if (doesExist) {
      return res.json({ success: false, message: "Email is already registered" });
    }
    // Check if the password is valid
    if (!password || password.length < 6) {
      return res.json({
        success: false,
        message: "Password is required and should be at least 6 characters long",
      });
    }
    // Hashing the password
    const hashedPassword = await hashPassword(password);
    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    // Save the new user.
    await newUser.save();
    return res.json({ success: true, message: "User created successfully" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Server error" });
  }
};

// Log in endpoint
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "No user found" });
    }

    // Check if passwords match
    const doesMatch = await comparePassword(password, user.password);
  } catch (error) {
    console.log(error);
  }
};

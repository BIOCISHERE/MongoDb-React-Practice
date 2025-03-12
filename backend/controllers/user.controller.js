import { comparePassword, hashPassword } from "../auth.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

// Return user info endpoint
export const getProfile = async (req, res) => {
  const token = req.cookie;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

// Sign up endpoint
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if firstname was entered
    if (!name.firstName) {
      return res.json({ success: false, message: "Firstname is required" });
    }
    // Check if lastname was entered
    if (!name.lastName) {
      return res.json({ success: false, message: "Lastname is required" });
    }
    // Check if the email is a empty string
    if (!email) {
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
    // Return a response indicating that a new user have been successfully created
    return res.json({ success: true, message: "User created successfully" });
  } catch (error) {
    // If error, we print it into the console
    console.log(error);
    // Return a response, to indicate that something failed on the server side
    return res.json({ success: false, message: "Server error" });
  }
};

// Log in endpoint
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if email was entered
    if (!email) {
      return res.json({ success: false, message: "Email is required" });
    }
    // Check is password was entered
    if (!password) {
      return res.json({ success: false, message: "Password is required" });
    }
    // Check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "No user found" });
    }
    // Check if passwords match
    const doesMatch = await comparePassword(password, user.password);
    if (!doesMatch) {
      return res.json({ success: false, message: "Incorrect password" });
    }

    jwt.sign(
      { email: user.email, id: user.id, name: user.name },
      process.env.JWT_SECRET,
      {},
      (err, token) => {
        if (err) throw err;
        return res.cookie("token", token).json({
          success: true,
          message: "Log in successful. Welcome!",
          user: { id: user.id, name: user.name, email: user.email },
        });
      }
    );
  } catch (error) {
    // If error, we print it into the console
    console.log(error);
    // Return a response, to indicate that something failed on the server side
    return res.json({ success: false, message: "Server error" });
  }
};

// Add product to user favorite endpoint
export const addFavorite = async (req, res) => {
  try {
    const { userID, productID } = req.body;
    // Check if user id is given
    if (!userID) {
      return res.json({ success: false, message: "User id is required" });
    }
    //Check if product id is given
    if (!productID) {
      return res.json({ success: false, message: "Product id is required" });
    }
    // Check if user exist
    const user = await User.findById(userID);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    // Add product to user favorites
    user.favorites.push(productID);
    // Save changes
    await user.save();
    // Return a response indicating that user favorites has been updated
    return res.json({ success: true, message: "Added to favorites successfully" });
  } catch (error) {
    // If error, we print it into the console
    console.log(error);
    // Return a response, to indicate that something failed on the server side
    return res.json({ success: false, message: "Server error" });
  }
};

// Remove product from user favorite endpoint
export const removeFavorite = async (req, res) => {
  try {
    const { userID, productID } = req.body;
    // Check if user id is given
    if (!userID) {
      return res.json({ success: false, message: "User id is required" });
    }
    // Check if product id is given
    if (!productID) {
      return res.json({ success: false, message: "Product id is required" });
    }
    // Check if user exist
    const user = await User.findById(userID);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    // Remove product from user favorites
    await user.favorites.pull(productID);
    // Save changes
    await user.save();
    // Return a response indicating that user favorites has been updated
    return res.json({ success: true, message: "Product removed from favorites" });
  } catch (error) {
    // If error, we print it into the console
    console.log(error);
    // Return a response, to indicate that something failed on the server side
    return res.json({ success: false, message: "Server error" });
  }
};

// Update all user shipping info endpoint
export const updateShippingInfo = async (req, res) => {
  try {
    const { userID, newShipping } = req.body;
    // Check if everything required is given
    if (!userID) {
      return res.json({ success: false, message: "User id is required" });
    }
    // Check if required shipping info has been given
    if (!newShipping.adress) {
      return res.json({ success: false, message: "Adress is required" });
    } else if (!newShipping.country) {
      return res.json({ success: false, message: "Country is required" });
    } else if (!newShipping.state) {
      return res.json({ success: false, message: "State is required" });
    } else if (!newShipping.city) {
      return res.json({ success: false, message: "City is required" });
    }
    // Check if user exist
    const user = await User.findById(userID);

    user.shipping = newShipping;
  } catch (error) {
    // If error, we print it into the console
    console.log(error);
    // Return a response, to indicate that something failed on the server side
    return res.json({ success: false, message: "Server error" });
  }
};

const express = require("express");
const User = require("../Models/models");
const bcrypt = require("bcryptjs");
const router = express.Router();
const crypto = require('crypto');
const nodemailer = require("nodemailer");

//! SignUp
router.post("/Signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //* Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    //* Hashing password
    const hashedPassword = await bcrypt.hash(password, 10);
    //* New User
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong 1" });
    console.log(err);
  }
});

//! Login
router.post("/Login", async (req, res) => {
  const { email, password } = req.body;
  try {
    //* check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //* check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

//! forgot-password

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    //* check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //* generate a token with set expiry time
    const token = crypto.randomBytes(23).toString("hex");
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 400000;
    await user.save();
    
    // Send token to the frontend
    res.status(200).json({ message: "Reset token sent", token });
  } catch (err) {
    res.status(400).json({ message: "Error in password reset" });
    console.log(err);
  }
});

//! reset-password

router.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  
  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: 'Password reset token is invalid or has expired' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password and clear the reset token fields
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.status(200).json({ message: 'Password has been reset successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error resetting password' });
  }
});


module.exports = router;

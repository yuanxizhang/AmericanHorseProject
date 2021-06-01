const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const Users = require("../db/models/Users");

// ***********************************************//
// Create a user
// ***********************************************//
exports.createUser = async (req, res) => {
  // console.log(req.body)
  const { name, email, password, admin } = req.body;
  try {
    const user = new Users({
      name,
      email,
      password,
      admin
    });
    const token = await user.generateAuthToken();
    // console.log(token)
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ***********************************************//
// Login a user
// ***********************************************//
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ******************************
// Password Reset Request
// This route sends an email that the
// user must click within 10 minutes
// to reset their password.
// ******************************
exports.requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');
    const token = jwt.sign(
      { _id: user._id.toString(), name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '10m' }
    );
    forgotPasswordEmail(email, token);
    res.json({ message: 'reset password email sent!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.passwordRedirect = async (req, res) => {
  const { token } = req.params;
  try {
    jwt.verify(token, process.env.JWT_SECRET, function (err) {
      if (err) throw new Error(err.message);
    });
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 600000,
      sameSite: 'Strict'
    });
    res.redirect(process.env.URL + '/update-password');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// AUTHENTICATED REQUESTS

// ***********************************************//
// Get current user
// ***********************************************//
exports.getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user._id)
    .populate('adopter')
    .populate('rescuer');

  res.json({
    ...user.toObject(),
    adopter: user.adopter,
    rescuer: user.rescuer
  });
};

// ***********************************************//
// Update a user
// ***********************************************//
exports.updateCurrentUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'Invalid updates' });
  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.json(req.user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Logout a user
// ***********************************************//
exports.logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.cookies.jwt;
    });
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'logged out!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Logout all devices
// ***********************************************//

exports.logoutAllDevices = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'logged out from all devices!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ***********************************************//
// Delete a user
// ***********************************************//

exports.deleteUser = async (req, res) => {
  try {
    await req.user.remove();
    res.clearCookie('jwt');
    res.json({ message: 'user deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Upload password
// ***********************************************//


exports.updatePassword = async (req, res) => {
  try {
    req.user.password = req.body.password;
    await req.user.save();
    res.clearCookie('jwt');
    res.status(200).json({ message: 'password updated successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// module.exports = router;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  github: String,
  linkedin: String,
  profilePic: String, // Extracted or uploaded
  bio: String,        // AI-generated or user-written
  resumeUrl: String,
  accountType: { type: String, default: 'free' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);

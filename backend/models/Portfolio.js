const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  theme: String,
  content: {
    projects: [{ title: String, description: String, link: String, images: [String] }],
    skills: [{ name: String, level: String }],
    experience: [{ company: String, role: String, duration: String }],
    education: [{ degree: String, school: String, year: String }],
    achievements: [String],
    customSections: [{ title: String, content: String }]
  },
  publishedUrl: String,
  createdAt: { type: Date, default: Date.now }
  ,
  versions: [{
    content: Object,
    createdAt: { type: Date, default: Date.now },
    note: String
  }]
});

module.exports = mongoose.model('Portfolio', portfolioSchema);

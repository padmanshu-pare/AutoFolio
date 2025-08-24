const mongoose = require('mongoose');

const themeSchema = new mongoose.Schema({
  name: String,
  description: String,
  previewImage: String,
  properties: {
    colors: {
      primary: String,
      secondary: String,
      background: String,
      text: String
    },
    fonts: {
      heading: String,
      body: String
    },
    layout: String,
    customCSS: String,
    hover: {
      effect: String, // e.g., 'scale', 'shadow', 'color-change'
      css: String     // Custom CSS for hover
    },
    animation: {
      type: String,   // e.g., 'fade', 'slide', 'bounce'
      duration: String, // e.g., '0.5s', '1s'
      css: String     // Custom CSS for animation
    },
    styleOptions: Object // Any extra CSS styling options
  },
  aiSuggestions: [{
    colors: {
      primary: String,
      secondary: String,
      background: String,
      text: String
    },
    fonts: {
      heading: String,
      body: String
    },
    profession: String,
    personality: String,
    favorited: { type: Boolean, default: false },
    rating: { type: Number, min: 1, max: 5 }
  }],
  isCustom: { type: Boolean, default: false },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Theme', themeSchema);

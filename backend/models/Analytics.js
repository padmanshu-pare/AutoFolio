const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  portfolio: { type: mongoose.Schema.Types.ObjectId, ref: 'Portfolio' },
  views: { type: Number, default: 0 },
  sectionStats: [{
    section: String,
    timeSpent: Number,
    clicks: Number
  }],
  lastViewed: Date
});

module.exports = mongoose.model('Analytics', analyticsSchema);

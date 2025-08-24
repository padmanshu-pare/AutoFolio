const mongoose = require('mongoose');

const resumeFeedbackSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  resumeUrl: String,
  feedbackType: { type: String, enum: ['resume', 'linkedin'], default: 'resume' },
  details: [{
    section: String,      // e.g., "Education", "Skills"
    message: String,      // Feedback message
    resolved: { type: Boolean, default: false }
  }],
  errors: [String],        // List of errors found during parsing
  warnings: [String],      // List of warnings
  suggestions: [String],   // AI suggestions for improvement
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ResumeFeedback', resumeFeedbackSchema);

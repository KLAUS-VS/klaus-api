const mongoose = require('mongoose');

const examSchema = mongoose.Schema({
  subject: {
    type: String,
    required: true,
    lowercase: true,
  },
  lecturer: {
    type: String,
    required: true,
    lowercase: true,
  },
  semester: {
    type: String,
    required: true,
    lowercase: true,
  },
  location: {
    type: String,
    required: true,
    lowercase: true,
  },
  solutions: Boolean,
  originalQuestions: Boolean,
  comments: String,
});

module.exports = mongoose.model('Exam', examSchema);
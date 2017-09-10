const mongoose = require('mongoose');

const examSchema = mongoose.Schema({
  subject: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  subStartWith: {
    type: String,
    required: true,
    lowercase: true,
  },
  lecturer: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  semester: {
    type: String,
    required: true,
    lowercase: true,
  },
  edv: {
    type: Number,
    required: true,
  },
  course: {
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
  comments: {
    type: String,
    trim: true,
  },
  concatName: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
});

module.exports = mongoose.model('Exam', examSchema);

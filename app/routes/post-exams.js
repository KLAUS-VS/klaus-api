const Exam = require('../models/exam');
const fs = require('fs');

module.exports = (req, res) => {
  if (req.file.mimetype !== 'application/pdf') {
    fs.unlink(req.file.path, (err) => {
      if (err) {
        throw (err);
      }
    });
    const response = {
      status: 'file is not of a valid file type (pdf)',
    };
    res.send(JSON.stringify(response));
  } else {
    const newExam = new Exam();
    newExam.subject = req.body.subject.toLowerCase();
    newExam.lecturer = req.body.lecturer.toLowerCase();
    newExam.semester = req.body.semester.toLowerCase();
    newExam.location = req.file.path.toLowerCase();
    newExam.solutions = req.body.solutions;
    newExam.originalQuestions = req.body.originalQuestions;
    newExam.comments = req.body.comments.toLowerCase();
    newExam.concatName = generateUniqueName(req.body);
    newExam.save((err) => {
      if (err) {
        throw (err);
      }
      const response = {
        status: 'ok',
      };
      res.send(JSON.stringify(response));
    });
  }
};

const generateUniqueName = (data) => {
  const name = `${data.subject}-${data.lecturer}-${data.semester}-${Date.now()}`;
  return name;
};

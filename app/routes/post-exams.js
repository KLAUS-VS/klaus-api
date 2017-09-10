const Exam = require('../models/exam');
const fs = require('fs');

module.exports = (req, res) => {
  if (req.file.mimetype !== 'application/pdf') {
    fs.unlink(req.file.path, (err) => {
      if (err) {
        throw (err);
      }
    });
    res.send({ status: 'file is not of a valid file type (pdf)' });
  } else {
    const newExam = new Exam();
    newExam.subject = req.body.subject;
    newExam.subStartWith = getFirstCharacter(removeWhitespace(req.body.subject));
    newExam.lecturer = req.body.lecturer;
    newExam.semester = removeWhitespace(req.body.semester);
    newExam.course = req.body.course;
    newExam.edv = req.body.edv;
    newExam.location = req.file.path;
    newExam.solutions = req.body.solutions;
    newExam.originalQuestions = req.body.originalQuestions;
    newExam.comments = req.body.comments;
    newExam.concatName = removeWhitespace(generateUniqueName(req.body));
    newExam.save((err) => {
      if (err) {
        throw (err);
      }
      res.send({ status: 'ok' });
    });
  }
};

const generateUniqueName = (data) => {
  const name = `${data.subject}-${data.lecturer}-${data.semester}-${Date.now()}`;
  return name;
};

const removeWhitespace = (text) => {
  return text.toLowerCase().replace(/\s/g, '');
};

const getFirstCharacter = (text) => {
  return text.charAt(0);
};

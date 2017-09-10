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
    newExam.subject = req.body.subject.trim();
    newExam.subStartWith = getFirstCharacter(removeWhitespace(req.body.subject));
    newExam.lecturer = req.body.lecturer.trim();
    newExam.semester = removeWhitespace(req.body.semester);
    newExam.location = removeWhitespace(req.file.path);
    newExam.solutions = removeWhitespace(req.body.solutions);
    newExam.originalQuestions = removeWhitespace(req.body.originalQuestions);
    newExam.comments = req.body.comments.trim();
    newExam.concatName = removeWhitespace(generateUniqueName(req.body));
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

const removeWhitespace = (text) => {
  return text.toLowerCase().replace(/\s/g, '');
};

const getFirstCharacter = (text) => {
  return text.charAt(0);
};

const Exam = require('../models/exam');

module.exports = (req, res) => {
  Exam.find({}, (err, exams) => {
    if (err) {
      throw (err);
    } else {
      findSuccess(exams, req, res);
    }
  });
};

const findSuccess = (exams, req, res) => {
  //res.send(exams);
  const response = [];
  exams.forEach((exam) => {
    const customResponseObject = {
      fileName: exam.concatName,
      fileType: 'pdf',
      comments: exam.comments,
      solutions: exam.solutions,
      lecturer: exam.lecturer,
      subject: exam.subject,
    };
    response.push(customResponseObject);
  });
  res.send(response);
};

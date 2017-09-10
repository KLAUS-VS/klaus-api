const Exam = require('../models/exam');

module.exports = (req, res) => {
  const query = Exam.find({ subStartWith: 'a' }).sort({ 'date': -1 }).limit(100);
  query.exec((err, exams) => {
    if (err) {
      throw (err);
    } else {
      findSuccess(exams, res);
    }
  });
};

const findSuccess = (exams, res) => {
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

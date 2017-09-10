const Exam = require('../models/exam');

module.exports = (req, res) => {
  Exam.findOne({ 'concatName': req.params.exam }, (err, exam) => {
    if (err) {
      throw (err);
    } else {
      sendFile(exam, res);
    }
  });
};

const sendFile = (exam, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.download(exam.location, exam.concatName + '.pdf');
};

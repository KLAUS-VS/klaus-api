const Exam = require('../models/exam');

module.exports = (req, res) => {
  const query = Exam.find({ subStartWith: 'a' }).sort({ 'date': -1 }).limit(100);
  //const query = Exam.find({}).sort({ 'date': -1 }).limit(100);
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
      subject: exam.subject,
      lecturer: exam.lecturer,
      semester: exam.semester,
      course: exam.course,
      originalQuestions: exam.originalQuestions,
      solutions: exam.solutions,
      comments: exam.comments,
      fileName: exam.concatName,
      fileType: 'pdf',
    };
    response.push(customResponseObject);
  });
  res.send(response);
};

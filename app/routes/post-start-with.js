const Exam = require('../models/exam');

module.exports = (req, res) => {
  const query = Exam.find({ subStartWith: req.body.letter });
  query.exec((err, suggestions) => {
    if (err) {
      throw (err);
    } else {
      findSuccess(suggestions, res);
    }
  });
};

const findSuccess = (suggestions, res) => {
  const response = [];
  suggestions.forEach((suggestion) => {
    const customResponseObject = {
      subject: suggestion.subject,
      lecturer: suggestion.lecturer,
      course: suggestion.course,
      fileName: suggestion.concatName,
    };
    response.push(customResponseObject);
  });
  res.send(response);
};

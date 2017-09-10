const Exam = require('../models/exam');

module.exports = (req, res) => {
  const regex = new RegExp('^' + req.body.search);
  console.log(typeof searchString);
  const query = Exam.find({
    $or: [
      { lecturer: regex },
      { subject: regex },
      { course: regex },
    ],
  }).limit(5);
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

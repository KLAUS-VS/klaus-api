const Exam = require('../models/exam');

module.exports = (req, res) => {
  const regex = new RegExp('^' + req.body.search);
  const query = queryBuilder(regex, req.params.limit);
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

const queryBuilder = (search, limit) => {
  console.log(limit);
  const query = Exam.find({
    $or: [
      { lecturer: search },
      { subject: search },
      { course: search },
    ],
  });
  if (limit === 'false') {
    return query;
  }
  return query.limit(5);
};

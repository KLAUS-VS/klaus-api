const Exam = require('../models/exam');

module.exports = (req, res) => {
  Exam.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
      process.exit();
    } else {
      throw (err);
    }
  });
};

const Exam = require('./models/exam');

module.exports = (app) => {
  app.get('/api/exams', (req, res) => {
    Exam.find({}, (err, docs) => {
      if (!err) {
        res.send(docs);
        process.exit();
      } else {
        throw (err);
      }
    });
  });

  app.post('/api/exams', (req, res) => {
    res.send('response from POST exams');
  });

  app.post('/api/search', (req, res) => {
    res.send('response from POST search');
  });
};

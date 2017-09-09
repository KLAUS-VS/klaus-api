const getExams = require('./routes/get-exams');

module.exports = (app) => {
  app.get('/api/exams', (req, res) => {
    getExams(req, res);
  });

  app.post('/api/exams', (req, res) => {
    res.send('response from POST exams');
  });

  app.post('/api/search', (req, res) => {
    res.send('response from POST search');
  });
};

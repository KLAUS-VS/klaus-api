const multer = require('multer');
const destination = multer({ dest: './exams/' });
const getExams = require('./routes/get-exams');
const postExams = require('./routes/post-exams');

module.exports = (app) => {
  app.get('/api/exams', getExams);

  app.post('/api/exams', destination.single('exam'), postExams);

  app.post('/api/search', (req, res) => {
    res.send('response from POST search');
  });
};

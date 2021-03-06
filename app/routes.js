const multer = require('multer');
const destination = multer({ dest: './exams/' });
const getExams = require('./routes/get-exams');
const getExamName = require('./routes/get-exam-name');
const postExams = require('./routes/post-exams');
const postSearch = require('./routes/post-search');
const postSearchStart = require('./routes/post-start-with');

module.exports = (app) => {
  app.get('/api/exams', getExams);
  app.get('/api/exams/:exam', getExamName);
  app.post('/api/exams', destination.single('exam'), postExams);
  app.post('/api/search/:limit', postSearch);
  app.post('/api/search-start', postSearchStart);
};

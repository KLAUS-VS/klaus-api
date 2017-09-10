// declare the port either process environment variable or 8080
const port = process.env.PORT || 8080;
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const configDB = require('./config/database.js');
app.set('dbURL', configDB.url);
mongoose.connect(app.get('dbURL'), {
  useMongoClient: true,
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

require('./app/routes.js')(app);

app.listen(port, () => {
  console.log('App running on: ' + port);
});

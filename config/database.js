module.exports = {
  //'url': 'mongodb://localhost:27017/klaus-vs',
  'url': process.env.DB_PORT ? process.env.DB_PORT.replace('tcp', 'mongodb') + '/klaus-vs' : process.env.MONGODB,
};

const mongoose = require('mongoose');
const config = require('./config/config');

mongoose.connect(config.DB.URI, err => {
  if (err) console.log('# DB error');
  else console.log('%n DB connected');
});

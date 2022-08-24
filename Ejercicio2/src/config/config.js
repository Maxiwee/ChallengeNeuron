module.exports = {
  PORT: process.env.PORT || 3001,
  DB: {
    URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/challenge',
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
  },
};

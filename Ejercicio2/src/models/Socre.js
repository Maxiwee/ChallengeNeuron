const { Schema, model } = require('mongoose');

const scoreSchema = new Schema({
  student: { type: Schema.ObjectId, ref: 'Student', require: true },
  english: { type: String, require: false },
  spanish: { type: String, require: false },
  mathematics: { type: String, require: false },
  history: { type: String, require: false },
});

module.exports = model('Score', scoreSchema);

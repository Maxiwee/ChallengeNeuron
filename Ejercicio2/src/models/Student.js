const { Schema, model } = require('mongoose');

const studentSchema = new Schema({
  name: { type: String, require: true },
  lastname: { type: String, require: true },
  dateOfBirth: { type: Date, require: true },
  group: { type: String, require: true },
});

module.exports = model('Student', studentSchema);

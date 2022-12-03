const { Schema, model } = require('mongoose');

const clientSchema = new Schema({
  name: String,
  age: Number,
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
  },
  status: String,
  religion: String,
  education: String,
  nationality: String,
  language: String,
  address: String,
  phone: String,
  email: String,
  income: String,
  spouse: String,
  spouse_address: String,
  spouse_phone: String,
  details: [String],
});

module.exports = model('Client', clientSchema);

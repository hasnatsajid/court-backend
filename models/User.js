const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['admin', 'client', 'lawyer', 'staff'],
  },
});

module.exports = model('User', userSchema);

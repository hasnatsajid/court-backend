const { Schema, model } = require('mongoose');

const dispositionSchema = new Schema({
  nature: {
    type: String,
    enum: ['Criminal', 'Civil', 'Administrative 1', 'Administrative 2', 'Administrative 3'],
  },
  court: String,
  title: String,
  clients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Client',
    },
  ],
  case_number: String,
  for: String,
  assisted_by: String,
});

module.exports = model('Disposition', dispositionSchema);

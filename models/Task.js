const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
  client: {
    type: String,
  },
  assistedBy: {
    type: Number,
  },
  services: {
    legal_advice: Boolean,
    legal_documentation: {
      type: Boolean,
      title: String,
    },
    legal_representation: {
      type: Boolean,
      title: String,
      case_number: String,
      parties: String,
      clients_assisted: String,
    },
    inquest_assistance: {
      type: Boolean,
      title: String,
      case_number: String,
      parties: String,
    },
    mediation: {
      type: Boolean,
      parties: String,
    },
    administered_oath: {
      type: Boolean,
      title: String,
    },
    others: String,
  },
  status: String,
});

module.exports = model('Client', taskSchema);

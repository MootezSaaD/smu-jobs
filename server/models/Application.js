const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  _applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  _job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
});

module.exports = mongoose.model('Application', ApplicationSchema);

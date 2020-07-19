const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  _applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  _job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  _recruiter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, default: 'PENDING' },
});

module.exports = mongoose.model('Application', ApplicationSchema);

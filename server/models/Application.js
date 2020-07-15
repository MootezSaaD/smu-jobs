const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  _applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  _job: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
});

module.export = mongoose.model('Application', ApplicationSchema);

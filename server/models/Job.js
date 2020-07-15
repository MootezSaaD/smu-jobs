const mongoose = require('mongoose');

const requiredString = {
  type: String,
  required: true,
};
const JobSchema = new mongoose.Schema({
  title: requiredString,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  course: requiredString,
  description: requiredString,
  expirationDate: {
    //YYYY-MM-DD (ISO 8601)
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Job', JobSchema);

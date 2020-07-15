const mongoose = require('mongoose');

const requiredString = {
  type: String,
  required: true,
};

const UserSchema = new mongoose.Schema({
  firstName: requiredString,
  lastName: requiredString,
  email: requiredString,
  password: requiredString,
  role: {
    type: String,
  },
});

module.exports = mongoose.model('User', UserSchema);

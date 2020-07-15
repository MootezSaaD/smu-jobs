const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (payload) => {
  return Promise.resolve(
    jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXP,
    })
  );
};

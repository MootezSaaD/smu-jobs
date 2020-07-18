const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    res.statusCode = 403;
    next(new Error('Missing access Token'));
    return;
  }
  jwt.verify(
    req.headers.authorization.replace('Bearer ', ''),
    process.env.JWT_SECRET,
    (err, decoded) => {
      if (err) {
        res.statusCode = 401;
        next(new Error(err.message));
      } else {
        req.userId = decoded._id;
        req.role = decoded.role;
        next();
      }
    }
  );
};

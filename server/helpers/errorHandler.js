require('dotenv').config();

module.exports = function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  if (!res.statusCode) {
    res.statusCode = 500;
  }
  res.json({
    success: false,
    message: err.message,
    stack: 'DEV'.localeCompare(process.env.NODE) >= 0 ? err.stack : '🥞',
  });
};

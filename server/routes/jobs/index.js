const jobsRouter = require('express').Router();
const fs = require('fs');

fs.readdirSync(__dirname).forEach((file) => {
  if (file !== 'index.js') {
    jobsRouter.use('', require(`./${file}`));
  }
});

module.exports = jobsRouter;

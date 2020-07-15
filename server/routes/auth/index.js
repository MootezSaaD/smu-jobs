const authRouter = require('express').Router();
const fs = require('fs');

fs.readdirSync(__dirname).forEach((file) => {
  if (file !== 'index.js') {
    authRouter.use('', require(`./${file}`));
  }
});

module.exports = authRouter;

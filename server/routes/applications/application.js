const route = require('express').Router();
const verifyToken = require('../../middleware/verifyToken');
const { addApplication } = require('../../services/application.service');

route.post('/new/:jobid', verifyToken, async (req, res, next) => {
  try {
    await addApplication(req.userId, req.params['jobid']);
    res.json({
      success: true,
      message: 'Application has been successfully submitted',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = route;

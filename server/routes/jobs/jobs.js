const Router = require('router');
const verifyToken = require('../../middleware/verifyToken');
const { isRecruiter } = require('../../middleware/role');
const { addJob } = require('../../services/jobs.service');
const route = Router();

route.get('/', verifyToken, isRecruiter, (req, res, next) => {
  try {
    console.log(req.userId);
    res.json({
      message: 'Hi there !',
    });
  } catch (error) {
    throw new Error(error.message);
  }
});

route.post('/new', verifyToken, isRecruiter, async (req, res, next) => {
  try {
    await addJob(req.body, req.userId).catch;
    res.json({
      success: true,
      message: 'Job has been successfully added',
    });
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = route;

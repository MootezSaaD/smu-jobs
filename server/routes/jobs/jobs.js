const Router = require('router');
const verifyToken = require('../../middleware/verifyToken');
const { isRecruiter } = require('../../middleware/role');
const { addJob, selectAllJobs } = require('../../services/jobs.service');
const route = Router();

route.get(
  '/',
  /* verifyToken, isRecruiter, */ async (req, res, next) => {
    try {
      const jobs = await selectAllJobs();
      res.json(jobs);
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

route.post(
  '/new',
  /* verifyToken, isRecruiter, */ async (req, res, next) => {
    try {
      const job = await addJob(req.body /* , req.userId */);
      res.json(job);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = route;

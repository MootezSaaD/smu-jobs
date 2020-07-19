const Application = require('../models/Application');
const Job = require('../models/Job');

module.exports = {
  addApplication: async (jobId, userId) => {
    try {
      const job = Job.findById(jobId);
      const app = new Application({
        _applicant: userId,
        _job: jobId,
        _recruiter: job.author,
      });
      await app.save();
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

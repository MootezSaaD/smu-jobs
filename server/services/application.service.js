const Application = require('../models/Application');

module.exports = {
  addApplication: async (jobId, userId) => {
    try {
      const app = new Application({
        _applicant: userId,
        _job: jobId,
      });
      await app.save();
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

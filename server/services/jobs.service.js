const Job = require('../models/Job');

module.exports = {
  selectAllJobs: async () => Job.find(),
  addJob: async (jobDetails, userId) => {
    try {
      jobDetails.author = userId;
      const job = new Job(jobDetails);
      await job
        .save()
        .then((docs) => {})
        .catch((err) => {
          // TODO: handle errors correctly
          console.log(err);
        });
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

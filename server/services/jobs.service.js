const Job = require('../models/Job');

module.exports = {
  selectAllJobs: async () => {
    try {
      return Job.find({ expirationDate: { $gte: new Date() } })
        .populate('author', 'firstName lastName email -_id')
        .select('-__v');
    } catch (error) {
      throw new Error(error.message);
    }
  },

  addJob: async (jobDetails /* , userId */) => {
    try {
      //jobDetails.author = userId;
      const job = new Job(jobDetails);
      await job
        .save()
        .then((docs) => {})
        .catch((err) => {
          // TODO: handle errors correctly
          console.log(err);
        });
      return job;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

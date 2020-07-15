module.exports = {
  isRecruiter: (req, res, next) => {
    if ('Recruiter'.localeCompare(req.role)) {
      console.log(req.role);
      res.statusCode = 401;
      next(new Error('Allowed only for recruiters'));
    } else {
      next();
    }
  },
};

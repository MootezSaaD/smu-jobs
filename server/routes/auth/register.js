const Router = require('router');
const { register } = require('../../services/auth.service');
const route = Router();

route.post('/register', async (req, res, next) => {
  try {
    await register(req.body);
    res.status(200).json({
      success: true,
      message: 'User successfully registered',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = route;

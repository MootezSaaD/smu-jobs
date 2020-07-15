const Router = require('router');
const { login } = require('../../services/auth.service');
const route = Router();

route.post('/login', async (req, res, next) => {
  try {
    const user = await login(req.body);
    res.json({
      sucess: true,
      ...user,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = route;

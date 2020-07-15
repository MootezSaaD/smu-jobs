const User = require('../models/User');
const generateToken = require('../helpers/jwt');
const bcrypt = require('bcryptjs');

module.exports = {
  register: async (userInfo) => {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(userInfo.password, salt);
      userInfo.password = hash;
      const user = new User({ ...userInfo });
      await user
        .save()
        .then((docs) => {})
        .catch((err) => {
          // TODO: handle errors correctly
          console.log(err);
        });
      return user;
    } catch (error) {
      throw new Error();
    }
  },
  login: async (userInfo) => {
    try {
      const user = await User.findOne({ email: userInfo.email });
      if (!user) {
        throw new Error('User does not exist');
      }
      const checkPassword = await bcrypt.compare(
        userInfo.password,
        user.password
      );
      if (!checkPassword) throw new Error('Incorrect password');
      const accessToken = await generateToken({
        _id: user._id,
        role: user.role,
      });
      return {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        accessToken,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

const bcrypt = require('bcryptjs');
const emailValidator = require('email-validator');
const asyncHandler = require('express-async-handler');

// Import Utils
const generateToken = require('../utils/generateToken');

// Import Schema
const User = require('../schemas/userSchema');

// Initialize Controllers

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('All Fields Are Required!');
  } else {
    if (emailValidator.validate(email)) {
      let user = await User.findOne({ email: email });

      if (user != null) {
        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (user.email === email && passwordsMatch) {
          res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            avatar: user.avatar,
            token: generateToken(user._id),
            message: 'Login Successful!',
          });
        } else {
          res.status(401);
          throw new Error('Invalid Email or Password!');
        }
      } else {
        res.status(401);
        throw new Error('Invalid Email or Password!');
      }
    } else {
      res.status(400);
      throw new Error('Invalid Email Address!');
    }
  }
});

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  let { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    res.status(400);
    throw new Error('All Fields Are Required!');
  } else {
    if (emailValidator.validate(req.body.email)) {
      let user = await User.findOne({ email: email });

      if (user) {
        res.status(400);
        throw new Error('User Already Exists!');
      } else {
        if (password !== confirmPassword) {
          res.status(400);
          throw new Error('Passwords Do Not Match!');
        } else {
          const salt = await bcrypt.genSalt(Number(process.env.SALT));
          const hashedPassword = await bcrypt.hash(password, salt);

          const user = await User.create({
            name,
            email,
            password: hashedPassword,
          });

          if (user) {
            res.status(201).json({
              _id: user._id,
              name: user.name,
              email: user.email,
              avatar: user.avatar,
              isAdmin: user.isAdmin,
              token: generateToken(user._id),
              message: 'User Registered Successfully!',
            });
          } else {
            res.status(400);
            throw new Error('Invalid User Data!');
          }
        }
      }
    } else {
      res.status(400);
      throw new Error('Invalid Email Address!');
    }
  }
});

// Export Controllers
module.exports = {
  authUser,
  registerUser,
};

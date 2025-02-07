import express from 'express';
import validateReqBody from '../middleware/validate.req.body.js';
import {
  userValidationSchema,
  loginUserDataValidationSchema,
} from './user.validation.js';
import bcrypt from 'bcrypt';
import User from './user.model.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// * register user
router.post(
  '/user/register',
  validateReqBody(userValidationSchema),
  async (req, res) => {
    // extract new user from req.body
    const newUser = req.body;

    // find user using email
    const user = await User.findOne({ email: newUser.email });

    // if user exists, throw error
    if (user) {
      return res.status(409).send({ message: 'Email already exists!!!' });
    }

    // hash password
    const plainPassword = newUser.password;
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(plainPassword, saltRound);

    newUser.password = hashedPassword;

    // insert user
    await User.create(newUser);

    // send res
    return res.status(201).send({ message: 'User is registered successfully' });
  }
);

// * login user
router.post(
  '/user/login',
  validateReqBody(loginUserDataValidationSchema),
  async (req, res) => {
    // extract loginCredentials from req.body
    const loginCredentials = req.body;

    // find user using email
    const user = await User.findOne({ email: loginCredentials.email });

    // if user does not exist, throw error
    if (!user) {
      return res.status(404).send({ message: 'Invalid Credentials.' });
    }

    // compare password using bcrypt
    const plainPassword = loginCredentials.password;
    const hashedPassword = user.password;
    const isPasswordMatch = await bcrypt.compare(plainPassword, hashedPassword);

    // if password does not match, throw error
    if (!isPasswordMatch) {
      return res.status(404).send({ message: 'Invalid Credentials.' });
    }

    // generate token
    const payload = { email: user.email };
    const secretKey = process.env.ACCESS_TOKEN_SECRET_KEY;
    const token = jwt.sign(payload, secretKey, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
    });

    // send res
    return res
      .status(200)
      .send({ message: 'success', userDetails: user, accessToken: token });
  }
);

export default router;

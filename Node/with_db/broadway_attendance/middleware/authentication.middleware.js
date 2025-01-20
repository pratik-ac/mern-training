import User from '../user/user.model.js';
import jwt from 'jsonwebtoken';

export const isAdmin = async (req, res, next) => {
  try {
    // extract token from req.headers
    const { authorization } = req.headers;
    const splittedArray = authorization?.split(' ');
    const token = splittedArray?.length === 2 ? splittedArray[1] : null;

    // console.log('Token:', token);

    // if not token ,throw error
    if (!token) {
      throw new Error();
    }
    const secretKey = process.env.ACCESS_TOKEN_SECRET_KEY;

    // verify token
    const payload = jwt.verify(token, secretKey);

    // find user using email from payload
    const user = await User.findOne({ email: payload.email });

    // if not user found, throw error
    if (!user) {
      throw new Error();
    }

    // * check if user role is "admin"
    // if user role is not "admin", throw error
    if (user.role !== 'admin') {
      throw new Error();
    }

    // attach user._id to req
    req.loggedInUserId = user._id;

    // call next function
    next();
  } catch (error) {
    return res.status(401).send({ message: 'Unauthorized.' });
  }
};

export const isTeacher = async (req, res, next) => {
  try {
    // extract token from req.headers
    const { authorization } = req.headers;
    const splittedArray = authorization?.split(' ');
    const token = splittedArray?.length === 2 ? splittedArray[1] : null;

    // if not token ,throw error
    if (!token) {
      throw new Error();
    }
    const secretKey = process.env.ACCESS_TOKEN_SECRET_KEY;

    // verify token
    const payload = jwt.verify(token, secretKey);

    // find user using email from payload
    const user = await User.findOne({ email: payload.email });

    // if not user found, throw error
    if (!user) {
      throw new Error();
    }

    // * check if user role is "teacher"
    // if user role is not "teacher", throw error
    if (user.role !== 'teacher') {
      throw new Error();
    }

    // attach user._id to req
    req.loggedInUserId = user._id;

    // call next function
    next();
  } catch (error) {
    return res.status(401).send({ message: 'Unauthorized.' });
  }
};

import express from "express";
import {
  loginAdminValidationSchema,
  registerAdminValidationSchema,
} from "./admin.validation.js";
import Admin from "./admin.model.js";
import validateReqBody from "../middlewares/validation.middleware.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// * register admin
router.post(
  "/admin/register",
  validateReqBody(registerAdminValidationSchema),
  async (req, res) => {
    // extract new admin from req.body
    const newAdmin = req.body;

    // find admin with provided email
    const admin = await Admin.findOne({ email: newAdmin.email });

    // if admin exist ,throw error
    if (admin) {
      return res.status(409).send({ message: "Admin already exist." });
    }

    // generate hashed password
    const plainPassword = newAdmin.password;
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(plainPassword, saltRound);
    newAdmin.password = hashedPassword;
    await Admin.create(newAdmin);

    // send res
    return res.status(201).send({ message: "Registered....", newAdmin });
  }
);

// * login admin
router.get(
  "/admin/login",
  validateReqBody(loginAdminValidationSchema),
  async (req, res) => {
    // extract login credentials from req.body
    const loginCredentials = req.body;

    // find admin using email
    const admin = await Admin.findOne({ email: loginCredentials.email });

    // if not admin found, throw error
    if (!admin) {
      return res.status(404).send({ message: "Invalid Credentials" });
    }

    // check for password match
    const plainPassword = loginCredentials.password;
    const hashedPassword = admin.password;
    const isPasswordMatch = await bcrypt.compare(plainPassword, hashedPassword);

    // if not password match, throw error
    if (!isPasswordMatch) {
      return res.status(404).send({ message: "Invalid Credentials" });
    }

    // hide password
    admin.password = undefined;

    // generate access token
    const payload = { email: admin.email };
    const sign = "asdasfdsgrgrgpoer";

    const token = jwt.sign(payload, sign);

    // send res
    return res
      .status(200)
      .send({ message: "success", adminDetails: admin, accessToken: token });
  }
);

export default router;

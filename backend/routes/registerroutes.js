const express = require("express");
const RegisterRouter = express.Router();
const bcrypt = require("bcryptjs");
const registerDB = require("../models/registerschema");
const loginDB = require("../models/loginschema");

RegisterRouter.post("/", async (req, res) => {
  try {
    const oldUser = await loginDB.findOne({ username: req.body.username });
    if (oldUser) {
      return res
        .status(400)
        .json({ success: false, error: true, message: "User already exists" });
    }
    // const { firstName, lastName, email, password, role } = req.body;

    const oldmobile = await registerDB.findOne({ mobile: req.body.mobile });
    if (oldmobile) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Phone number already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    let log = {
      username: req.body.username,
      password: hashedPassword,
      role: 2,
    };
    const result = await loginDB(log).save();
    let reg = {
      login_id: result._id,
      name: req.body.name,
      mobile: req.body.mobile,
      location: req.body.location,
    };
    const result2 = await registerDB(reg).save();
    if (result2) {
      res.status(201).json({
        success: true,
        error: false,
        message: "Registration completed",
        details: result2,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: true, message: "Something went wrong" });
    console.log(error);
  }
});



module.exports = RegisterRouter;

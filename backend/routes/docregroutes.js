
const express = require("express");
const docregroutes = express.Router();
const bcrypt = require("bcryptjs");
const doctorDB = require("../models/docregschema");
const loginDB = require("../models/loginschema");

docregroutes.post("/", async (req, res) => {
  try {
    const oldUser = await loginDB.findOne({ username: req.body.username });
    if (oldUser) {
      return res
        .status(400)
        .json({ success: false, error: true, message: "User already exists" });
    }
    // const { firstName, lastName, email, password, role } = req.body;

    const oldmobile = await doctorDB.findOne({ mobile: req.body.mobile });
    if (oldmobile) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Phone number already exists",
      });
    }
    console.log(req.body.password)
    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    let log = {
      username: req.body.username,
      password: hashedPassword,
      role: 4,
    };
    const result = await loginDB(log).save();
    let reg = {
      login_id: result._id,
      docname: req.body.docname,
      specialization:req.body.specialization,
      email: req.body.email,
      mobile: req.body.mobile,
      
    };
    const result2 = await doctorDB(reg).save();
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

module.exports = docregroutes;









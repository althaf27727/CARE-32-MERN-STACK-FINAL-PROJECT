const express = require("express");
const addressRoutes = express.Router();
const Address = require("../models/addressSchema");
const checkauth = require("../middleware/checkauth");

addressRoutes.post("/add-address", checkauth, async (req, res) => {
  try {
    const prevAddress = await Address.findOne().sort({ _id: -1 });
    const prevaddresscount = prevAddress ? prevAddress.addresscount : 0;
    const newAddress = prevaddresscount + 1;

    console.log(typeof newAddress);

    const Data = {
      name: req.body.name,
      mobile: req.body.mobile,
      address: req.body.address,
      pincode: req.body.pincode,
      locality: req.body.locality,
      state: req.body.state,
      login_id: req.userData.userId,
      addresscount: newAddress,
      addresstype: newAddress === 1 ? "primary" : req.body.addresstype,
    };

    const result = await Address(Data).save();
    if (result) {
      res.status(200).json({
        success: true,
        error: false,
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        error: true,
        message: "data not added",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: "Internal server error",
      Errormessage: error.message,
    });
  }
});

addressRoutes.get("/view-address", checkauth, (req, res) => {
  Address.find({ login_id: req.userData.userId })

    // Address.aggregate([
    //     {
    //       $match: { login_id: new mongoose.Types.ObjectId(req.userData.userId) },
    //     },
    //   ])

    .then((data) => {
      res.status(200).json({
        success: true,
        error: false,
        data: data,
      });
    })
    .catch((error) => {
      res.status(400).json({
        success: false,
        error: true,
        Errormessage: error.message,
      });
    });
});

module.exports = addressRoutes;

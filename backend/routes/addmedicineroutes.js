const express = require("express");
const addmedicineroutes = express.Router();
const Medicine = require("../models/addmedicineschema");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../myapp/public/images/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

addmedicineroutes.post(
  "/add-medicine",
  upload.single("image"),
  async (req, res) => {
    try {
      const Data = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.file.filename,
      };

      const result = await Medicine(Data).save();
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
  }
);

addmedicineroutes.get("/view-medicine", (req, res) => {
  Medicine.find()
    .then((data) => {
      res.status(200).json({
        success: true,
        error: false,
        data: data,
      });
    })
    .catch((err) => console.log(err));
});

addmedicineroutes.get("/view-medicine/:id", (req, res) => {
  Medicine.findOne({
    _id: req.params.id,
  })
    .then((data) => {
      res.status(200).json({
        success: true,
        error: false,
        data: data,
      });
    })
    .catch((err) => console.log(err));
});

module.exports = addmedicineroutes;

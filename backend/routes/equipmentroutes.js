const express = require("express");
const equipmentroutes = express.Router();
const Equipment = require("../models/equipmentschema");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/images/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

equipmentroutes.post(
  "/add-equipment",
  upload.single("image"),
  async (req, res) => {
    try {
      const Data = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.file.filename,
      };

      const result = await Equipment(Data).save();
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

equipmentroutes.get("/view-equipment", (req, res) => {
  Equipment.find()
    .then((data) => {
      res.status(200).json({
        success: true,
        error: false,
        data: data,
      });
      
    })
    .catch((error) =>{res.status(500).json({
        success: false,
        error: true,
        message: "Internal server error",
        Errormessage: error.message,
      });
    })
});

equipmentroutes.get("/view-equipment/:id", (req, res) => {
  Equipment.findOne({
    _id: req.params.id,
  })
    .then((data) => {
      res.status(200).json({
        success: true,
        error: false,
        data: data,
      });
    })
    .catch((error) =>{res.status(500).json({
        success: false,
        error: true,
        message: "Internal server error",
        Errormessage: error.message,
      });
    })
});

module.exports = equipmentroutes;
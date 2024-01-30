const express = require("express");
const addmedicineroutes = express.Router();
const Medicine = require("../models/addmedicineschema");
require("dotenv").config();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "CARE32/Medicine",
  },
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../myapp/public/images/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

const upload = multer({ storage: storage });

addmedicineroutes.post(
  "/add-medicine",
  upload.single("image"),
  async (req, res) => {
    console.log(req.file);
    console.log(req.file.path);
    try {
      const Data = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        // image: req.file.filename,
        image: req.file ? req.file.path : null,
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

addmedicineroutes.post('/update-medicine/:id',
upload.single("image"),
(req, res) => {
console.log(req.file);
  Medicine.findOne({
    _id: req.params.id,
  })
  
  .then((data) => {
      data.name=req.body.name,
      data.description=req.body.description,
   data.price=req.body.price,
   data.image= req.file ? req.file.path : null

data.save()
.then((data)=>{
  res.status(200).json({
      success: true,
      error: false,
      data: data,
    });
})
     
    })
    .catch((err) => console.log(err));
});

module.exports = addmedicineroutes;

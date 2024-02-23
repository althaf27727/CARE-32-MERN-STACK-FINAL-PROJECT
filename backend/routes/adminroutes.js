const express = require("express");
const adminroutes = express.Router();
const Admin = require("../models/doctorsschema");
const Medicine = require("../models/addmedicineschema");

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
    folder: "CARE32/Admin",
  },
});

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '../myapp/public/images/');
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname);
//     },
//   });

const upload = multer({ storage: storage });

adminroutes.post("/add-doctor", upload.single("image"), (req, res) => {
  console.log(req.file);
  console.log(req.file.path);
  const Data = new Admin({
    doctorname: req.body.doctorname,
    gender: req.body.gender,
    age: req.body.age,
    specialization: req.body.specialization,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    image: req.file ? req.file.path : null,
  });
  Data.save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => console.log(err));
});

adminroutes.get("/view-doctor/:id", (req, res) => {
  Admin.findOne({
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

adminroutes.get("/view-doctor", (req, res) => {
  Admin.find()
    .then((data) => {
      res.status(200).json({
        success: true,
        error: false,
        data: data,
      });
    })
    .catch((err) => console.log(err));
});

adminroutes.post("/update-doctor/:id", upload.single("image"), (req, res) => {
  // console.log("fileeeeeee",req.file);

  Medicine.findOne({
    _id: req.params.id,
  })

    .then((data) => {
      console.log(data);
      (data.name = req.body.name),
        (data.description = req.body.description),
        (data.price = req.body.price),
        (data.image = req.file ? req.file.path : null);

      data.save().then((data) => {
        res.status(200).json({
          success: true,
          error: false,
          data: data,
        });
      });
    })
    .catch((err) => console.log(err));
});

adminroutes.post(
  "/update-medicine/:id",
  upload.single("image"),
  async (req, res) => {
    try {
      console.log("fileeeeeee", req.file);
      const oldMedicine = await Medicine.findOne({
        _id: req.params.id,
      });

      const Data = {
        name: req.body.name ? req.body.name : oldMedicine.name,
        description: req.body.description
          ? req.body.description
          : oldMedicine.description,
        price: req.body.price ? req.body.price : oldMedicine.price,
        image: req.file ? req.file.path : oldMedicine.image,
      };

      const updateMedicine = await Medicine.updateOne(
        { _id: req.params.id },
        { $set: Data }
      );
      if (updateMedicine) {
        res.status(200).json({
          success: true,
          error: false,
          data: updateMedicine,
        });
      } else {
        res.status(400).json({
          success: false,
          error: true,
          message: "data not updated",
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

adminroutes.delete("/delete-doctor/:id", (req, res) => {
  Admin.deleteOne({
    _id: req.params.id,
  })
    .then(() => {
      res.send("Deleted Successfully");
    })
    .catch((err) => console.log(err));
});

module.exports = adminroutes;

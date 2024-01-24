const express= require('express')
const viewdoctorroutes = express.Router()

const ViewDoctor= require("../models/doctorsschema")

viewdoctorroutes.get('/view-doctor', (req, res) => {
    ViewDoctor.find()
      .then((data) => {
        res.status(200).json({
          success: true,
          error: false,
          data: data,
        });
      })
      .catch((err) => console.log(err));
  });

  module.exports= viewdoctorroutes
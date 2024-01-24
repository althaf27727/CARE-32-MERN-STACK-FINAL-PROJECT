const express = require("express");
const appoinmentroutes = express.Router();

const Appointment = require("../models/appoinmentschema");

appoinmentroutes.post("/fill-appointment", async (req, res) => {
  // console.log(req.body.name);
  // console.log(req.body.time);
  try {
    const prevBookingData = await Appointment.findOne().sort({ _id: -1 });
    const prevBookingId = prevBookingData?prevBookingData.booking_id:0
    const incBookingId = prevBookingId + 1;

    const Data = {
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      address: req.body.address,
      date: req.body.date,
      doctorname: req.body.doctorname,
      time: req.body.time,
      booking_id: incBookingId,

      
    };

    const result = await Appointment(Data).save();
    if (result) {
      return res.status(201).json({
        success: true,
        error: false,
        data: result,
        message: "appointment booked successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: "appointment booking failed",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: "internal server error",
      ErrorMessage: error.message,
    });
  }
});

appoinmentroutes.get("/view-appointment", (req, res) => {
  Appointment.find()
    .then((data) => {
      res.status(200).json({
        success: true,
        error: false,
        data: data,
      });
    })
    .catch((err) => console.log(err));
});

appoinmentroutes.delete("/delete-appointment/:id", (req, res) => {
  Appointment.deleteOne({
    _id: req.params.id,
  })
    .then(() => {
      res.send("Deleted Successfully");
    })
    .catch((err) => console.log(err));
});

module.exports = appoinmentroutes;

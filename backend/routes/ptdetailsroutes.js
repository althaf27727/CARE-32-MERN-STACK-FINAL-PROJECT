const express = require('express')
const ptdetailsroutes = express.Router()

const Ptdetails = require('../models/ptdetailsschema');
ptdetailsroutes.post('/add-ptd', (req,res) => {
    const Data = new Ptdetails({
       name:req.body.name,
       age:req.body.age,
    place:req.body.place,
    mobile:req.body.mobile,
    
     
    })

    Data.save()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => console.log(err))
})

ptdetailsroutes.get('/view-ptd/:id', (req, res) => {
    Ptdetails.findOne({
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
ptdetailsroutes.get('/view-ptd', (req, res) => {
    Ptdetails.find()
      .then((data) => {
        res.status(200).json({
          success: true,
          error: false,
          data: data,
        });
      })
      .catch((err) => console.log(err));
  });






  ptdetailsroutes.delete('/delete-ptd/:id', (req, res) => {
    Ptdetails.deleteOne({
        _id: req.params.id,
    })
        .then(() => {
            res.send("Deleted Successfully")
        })
        .catch((err) => console.log(err));
});

ptdetailsroutes.post('/update-ptd/:id', (req, res) => {
    Ptdetails.findOne({
      _id: req.params.id,
    })
    
    .then((data) => {
        data.name=req.body.name,
        data.age=req.body.age,
     data.place=req.body.place,
     data.mobile=req.body.mobile,
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
    

module.exports = ptdetailsroutes
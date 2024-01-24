const express= require('express')
const adminroutes = express.Router()
const Admin= require("../models/doctorsschema")

const multer= require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../myapp/public/images/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });

adminroutes.post('/add-doctor',upload.single('image'), (req,res) => {
    const Data = new Admin({
       doctorname:req.body.doctorname,
       gender:req.body.gender,
       age:req.body.age,
       specialization:req.body.specialization,
       address:req.body.address,
       phone:req.body.phone,
       email:req.body.email,
       image: req.file.filename

    
     
    })
    Data.save()
    .then((data) => {
        res.send(data)
    })
    .catch((err) => console.log(err))
})

adminroutes.get('/view-doctor/:id', (req, res) => {
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


adminroutes.get('/view-doctor', (req, res) => {
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






  adminroutes.delete('/delete-doctor/:id', (req, res) => {
    Admin.deleteOne({
        _id: req.params.id,
    })
        .then(() => {
            res.send("Deleted Successfully")
        })
        .catch((err) => console.log(err));
});

module.exports= adminroutes
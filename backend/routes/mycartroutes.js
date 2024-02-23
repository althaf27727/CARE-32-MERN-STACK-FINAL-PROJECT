const express = require("express");
const mycartroutes = express.Router();
const Mycart = require("../models/mycartschema");

const multer = require("multer");
const checkauth = require("../middleware/checkauth");
const { default: mongoose } = require("mongoose");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../myapp/public/images/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

mycartroutes.post(
  "/addto-mycart",
  checkauth,
  upload.single("image"),
  async (req, res) => {
    try {
const id=req.userData.userId
const productid= req.body._id
      const prevProduct = await Mycart.findOne({login_id:id,
        product_id:productid,
      });
      console.log("prevproduct",prevProduct);
      if (prevProduct!==null) {
        console.log("prevQuantity", prevProduct.quantity);

        const prevItemCount = prevProduct.quantity;
        console.log("prevItemCount", prevItemCount);

        const IncCount = prevItemCount + 1;
        console.log("inccount", IncCount);

        // const updatedData = {
        //   name: prevProduct.name,
        //   description: prevProduct.description,
        //   price: prevProduct.price,
        //   image: prevProduct.image,
        //   quantity: IncCount,
        //   login_id: prevProduct.login_id,
        //   product_id: prevProduct.product_id,
        // };
        const updatedProduct = await Mycart.updateOne({product_id:productid},{ $set:{quantity:IncCount} });
        // const updatedProduct = await Mycart.updateOne({ $set: update+dData });
        if (updatedProduct) {
          res.status(200).json({
            success: true,
            error: false,
            message: "cart updated",
            data:updatedProduct ,
          });
        } else {
          res.status(400).json({
            success: false,
            error: true,
            message: "cart not updated",
          });
        }
      } else {
        const Data = {
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          image: req.body.image,
          login_id: req.userData.userId,
          product_id: req.body._id,
        };

        const result = await Mycart(Data).save();
        if (result) {
          res.status(200).json({
            success: true,
            error: false,
            message: "Added to cart",
            data: result,
          });
        } else {
          res.status(400).json({
            success: false,
            error: true,
            message: "Data not added",
          });
        }
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

mycartroutes.get("/view-mycart", checkauth, (req, res) => {
  Mycart.aggregate([
    {
      $match: { login_id: new mongoose.Types.ObjectId(req.userData.userId) },
    },
  ])
    .then((data) => {
      res.status(200).json({
        success: true,
        error: false,
        data: data,
      });
    })
    .catch((err) => console.log(err));
});

mycartroutes.get("/view-mycart/:id", (req, res) => {
  Mycart.findOne({
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
mycartroutes.delete("/delete-cartitem/:id", (req, res) => {
  Mycart.deleteOne({
    _id: req.params.id,
  })
    .then(() => {
      res.send("Deleted Successfully");
    })
    .catch((err) => console.log(err));
});

mycartroutes.post("/increment/:id/:UserId", async (req, res) => {
    
    try {
      console.log(req.params.id);
        const product = await Mycart.findOne({
            login_id: req.params.UserId,
            _id: req.params.id,

        })
if(product) {
    
    const quantity = product.quantity;

    const newQuantity = quantity + 1;

    const updatedInc = await Mycart.updateOne({_id:req.params.id},{ $set:{quantity:newQuantity} });
    if (updatedInc) {
        res.status(200).json({
            success:true,
            error:false,
            message:"Quantity incremented"
        })
    }

}

        
    } catch (error) {
      res.status(500).json({
        success:false,
        error:true,
        Errormessage:error.message
      })
        
    }
})



mycartroutes.post("/decrement/:id/:UserId", async (req, res) => {
    
  try {
    console.log(req.params.id);
      const product = await Mycart.findOne({
          login_id: req.params.UserId,
          _id: req.params.id,

      })
if(product) {
  
  const quantity = product.quantity;

  const newQuantity = quantity - 1;

  const updatedInc = await Mycart.updateOne({_id:req.params.id},{ $set:{quantity:newQuantity} });
  if (updatedInc) {
      res.status(200).json({
          success:true,
          error:false,
          message:"Quantity decremented"
      })
  }

}

      
  } catch (error) {
    res.status(500).json({
      success:false,
      error:true,
      Errormessage:error.message
    })
      
  }
})

  
    
      

  



module.exports = mycartroutes;

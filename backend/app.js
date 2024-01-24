const express = require('express')
const index = express()
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();

const RegisterRouter = require('./routes/registerroutes');
const LoginRouter = require('./routes/loginroutes');
const StfregRouter = require('./routes/staffregroutes')
const ptdetailsroutes =require('./routes/ptdetailsroutes');
const docregroutes = require('./routes/docregroutes');
const adminroutes =require('./routes/adminroutes');
const appoinmentroutes = require('./routes/appoinmentroutes');
const viewdoctorroutes = require('./routes/viewdoctorroutes');
const {v4 : uuidv4} = require('uuid');
const addmedicineroutes = require('./routes/addmedicineroutes');
const equipmentroutes = require('./routes/equipmentroutes');
const wishlistroutes = require('./routes/wishlistroutes');
const mycartroutes = require('./routes/mycartroutes');
const addressRoutes = require('./routes/addressRoutes');
index.use(express.json())
index.use(express.urlencoded({extended:true}))
index.use(cors())
mongoose.connect('mongodb+srv://kmalthaf967:akm116111@cluster0.w0ls03j.mongodb.net/clinic', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connected")

    }).catch((Error) => {
        console.log(Error)
    })


index.use("/api/admin", adminroutes)
index.use("/api/register", RegisterRouter)
index.use("/api", LoginRouter)
index.use("/api/stfreg",StfregRouter)
index.use("/api/patientdetails", ptdetailsroutes)
index.use("/api/docreg", docregroutes)
index.use("/api/appointment", appoinmentroutes)
index.use("/api/viewdoc", viewdoctorroutes)
index.use("/api/profile", LoginRouter)
index.use("/api/medicine", addmedicineroutes)
index.use("/api/equipment", equipmentroutes)
index.use("/api/wishlist", wishlistroutes)
index.use("/api/mycart", mycartroutes)
index.use("/api/address", addressRoutes)

const userId = uuidv4()
const slicedId= userId.slice(0,4)



index.listen(process.env.PORT, () => {
    console.log(`server is running on port no: ${process.env.PORT}`)
// console.log(userId);
// console.log(slicedId);
})
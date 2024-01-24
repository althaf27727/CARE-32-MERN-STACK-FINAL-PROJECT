const mongoose = require('mongoose')
const appoinmentschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
   age : {
        type: Number,
        required: true
    },
    gender : {
        type: String,
        required: true
     },
    address : {
        type: String,
        required: true
    },
    date : {
        type: String,
        required: true
     },
     doctorname : {
        type: String,
        required: true
    },
    time : {
       type: String,
       required: true
    },
    booking_id: {
        type:Number,
        required: true,
        default: 1
    }

})
module.exports = mongoose.model("appointment", appoinmentschema)
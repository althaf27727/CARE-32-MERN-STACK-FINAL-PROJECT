const mongoose = require('mongoose')
const doctorsschema = new mongoose.Schema({
    doctorname: {
        type: String,
        required: true
    },
   gender : {
        type: String,
        required: true
    },
    age : {
        type: Number,
        required: true
    },
    specialization : {
        type: String,
        required: true
     },
     address : {
        type: String,
        required: true
    },
    phone : {
       type: String,
       required: true
    },
    email : {
        type: String,
        required : true
    },
    image : {
        type: String,
        required:true
    }

})
module.exports = mongoose.model("admin", doctorsschema)
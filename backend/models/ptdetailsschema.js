const mongoose = require('mongoose')
const ptdschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
   age : {
        type: Number,
        required: true
    },
   place : {
        type: String,
        required: true
    },
     mobile: {
        type: String,
        required: true
     }


})



module.exports = mongoose.model("ptdetails", ptdschema)
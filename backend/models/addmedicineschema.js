const mongoose= require('mongoose')
const addmedicineschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
     },

   price : {
        type: Number,
        required: true
    },
    image : {
        type: String,
        // required:true
    }
   
})

module.exports = mongoose.model("medicine", addmedicineschema)
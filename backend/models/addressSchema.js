const mongoose= require('mongoose')
const addressSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile : {
        type: String,
        required: true
     },

   address : {
        type: String,
        required: true
    },
    pincode : {
        type: String,
        required:true
    },
    locality : {
        type: String,
        required:true,
        
    },
    state :{
        type: String,
        required:true,
    },
    login_id :{
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    addresstype:{
        type:String,
       
    },
    addresscount:{
        type:Number,
        default:0
    }
})

module.exports = mongoose.model("address", addressSchema)
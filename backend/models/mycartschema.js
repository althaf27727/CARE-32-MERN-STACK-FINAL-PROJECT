const mongoose= require('mongoose')
const mycartschema = new mongoose.Schema({
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
        required:true
    },
    quantity : {
        type: Number,
        required:true,
        default: 1
    },
    login_id :{
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    product_id :{
        type: mongoose.Schema.Types.ObjectId,
        require: true
    }
   
})

module.exports = mongoose.model("mycart", mycartschema)
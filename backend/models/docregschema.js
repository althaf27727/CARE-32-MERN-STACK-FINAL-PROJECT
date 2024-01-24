const mongoose=require('mongoose')
const Schema = mongoose.Schema;
const DocSchema = new Schema({
    login_id: { type: Schema.Types.ObjectId, ref: 'login_tb', required: true },
    docname: { type: String, required: true },
    specialization: {type:String, required: true},
    email:{type:String, required:true},
    mobile:{type:Number, required:true}
})

var Doctordata= mongoose.model('docreg_tb', DocSchema);
module.exports= Doctordata;



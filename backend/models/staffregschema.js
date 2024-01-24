const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StaffregSchema = new Schema({
    login_id: { type: Schema.Types.ObjectId, ref: 'stflog_tb', required: true },
    name: { type: String, required: true },
    
    age: { type: Number, required: true },
    place: { type: String, required: true },
  
    mobile: { type: String, required: true }
  });

  
var Stfregdata = mongoose.model('staffreg_tb',StaffregSchema ); 
module.exports = Stfregdata;
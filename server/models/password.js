const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passwordSchema = new Schema({
    _id: {type:Schema.Types.ObjectId},
    user_id :{type: String,required:true},
    name:{type:String},
    url: {type:String,required:true},
    password :{type:String,required:true}
});

var Password = mongoose.model('Password',passwordSchema,"keys");
module.exports = Password;
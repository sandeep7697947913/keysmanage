const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
});

var User = mongoose.model('User',userSchema,'Users');
module.exports = User;

const mongoose =require('mongoose');

userSchema = mongoose.Schema({
    name:String,
    Email:String,
    number:Number,
    Password:String,
    Gender:String,


})


module.exports = mongoose.model('user',userSchema);
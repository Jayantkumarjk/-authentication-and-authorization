const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        minlength:[2,"Minimum two character required"],
        maxlength:[30,"Length exceeds the limit"],
        required:true  
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        required:true
    },
    password:{
        type:String,
        trim:true,
       // minlength:[8,"Minimum 8 charater Required"],
        required:true
    }
  
},{timestamps:true})

module.exports = mongoose.model("User",userSchema);
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const signupSchema=new Schema({
    name:{type:String,required:true},
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{type:String,required:true},
    isUser:false
    
})
const Signup=mongoose.model('login',signupSchema);
module.exports=Signup;

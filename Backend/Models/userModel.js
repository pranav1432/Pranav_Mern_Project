
const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,"please enter your name"],

    },
    email:{

        type:String,
        required:[true,"please enter your email"],
        unique:true,
        
    },
    password:{
        type:String,
        required:[true,"please enter your password"],

    },
    role:{
        type:String,
        default:"user"
    }

})

const USER=mongoose.model("User",userSchema);

module.exports={
    USER
}
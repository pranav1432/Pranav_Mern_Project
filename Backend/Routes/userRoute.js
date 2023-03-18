
const express=require("express");
const { signIn, login } = require("../Controller/userController");
 

const userRouter=express.Router();


userRouter.post("/signup",signIn);
userRouter.post("/login",login);

module.exports={
    userRouter
}



const express=require("express");
const { createPost } = require("../Controller/postController");
const { Auth } = require("../middlewares/auth");
 
 

const postRouter=express.Router();


postRouter.post("/newpost",Auth,createPost);
 

module.exports={
    postRouter
}


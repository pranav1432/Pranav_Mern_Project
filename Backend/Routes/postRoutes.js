
const express=require("express");
const { createPost, like_and_unlike, delete_post, follow_unfollow } = require("../Controller/postController");
const { Auth } = require("../middlewares/auth");
 
 

const postRouter=express.Router();
 

postRouter.post("/newpost",Auth,createPost);
postRouter.get("/post/:id",Auth,like_and_unlike);
postRouter.delete("/post/:id",Auth,delete_post);
postRouter.get("/follow/:id",Auth,follow_unfollow);
 






 

module.exports={
    postRouter
}


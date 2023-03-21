const { Post } = require("../Models/Post");
const { User } = require("../Models/User");


const createPost = async (req, res, next) => {


    try {


        let newPostData = {

            caption: req.body.caption,

            image: {
                public_id: "req.body.public_id",
                url: "url"
            },

            owner:req.user._id

        }

        let newpost=await Post.create(newPostData);


        let user=await User.findById(req.user._id);

        user.posts.push(newpost._id);

        await user.save();


        return res.status(201).send({
            success:true,
            post:newpost
        })

    } catch (err) {
        return res.status(500).send({
            success:false,
            message: err.message

        });
    }



}

module.exports = {

    createPost

}
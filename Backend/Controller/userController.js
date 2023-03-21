const { User } = require("../Models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")

const Token=(user)=>{

    // let {_id,name,email}=user;

   const token=jwt.sign({_id:user._id},"pranav122");

   return token;

}

const Register=async(req,res,next)=>{

    try{

    let {name,email,password}=req.body;

    let user=await User.findOne({email});

    if(user)
    {
        return res.status(500).send({
        success:false,
        message:"email id already exist"
        })
    }

    password=bcrypt.hashSync(password);

    user=await User.create({name,email,password,avatar:{

        public_id:"Sample_id",
        url:"Sample url"

    }});

    const token=Token(user);

    let options={expires:new Date(Date.now()+90*24*60*60*1000),httpOnly:true};
    

    return res.status(201).cookie("token",token,options).send({
        success:true,
        message:"Registration Successful",
        token,
        user
    })

     


    }
    
    catch(err){

        return res.status(500).send({
            message:err.message
        });


    }


}

const login=async(req,res,next)=>{

    try{

    let {email,password}=req.body;

    let user=await User.findOne({email});

    if(!user)
    {

        return res.status(401).send({
            success:false,
            message:"email id not exist"
        })

    }

    if(!bcrypt.compareSync(password,user.password))
    {
        return res.status(401).send({
            success:false,
            message:"password wrong"
        })

    }

    const token=Token(user);

    let options={expires:new Date(Date.now()+90*24*60*60*1000),httpOnly:true};
    

    return res.status(201).cookie("token",token,options).send({
        success:true,
        message:"Login Successful",
        token,
        user
    })

}catch(err){

    return res.status(500).send({
        message:err.message
    })

}



}

module.exports={
    Register,login
}
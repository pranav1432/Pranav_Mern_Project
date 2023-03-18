const { USER } = require("../Models/userModel");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")

const Token=(user)=>{

    let {_id,name,email}=user;

   const token=jwt.sign({_id,name,email},"pranav122");

   return token;

}

const signIn=async(req,res,next)=>{

    try{

    let {name,email,password}=req.body;

    let user=await USER.findOne({email});

    if(user)
    {
        return res.status(500).send({
        success:false,
        message:"email id already exist"
        })
    }

    password=bcrypt.hashSync(password);

    user=await USER.create({name,email,password});

    return res.status(201).send({
        success:true,
        message:"Registration Successful",
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

    let user=await USER.findOne({email});

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
    

    return res.status(201).send({
        success:true,
        message:"Login Successful",
        token
    })

}catch(err){

    return res.status(500).send({
        message:err.message
    })

}



}

module.exports={
    signIn,login
}
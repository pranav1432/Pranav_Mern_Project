import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Api/authentication';
import { myAction } from '../Redux/action';

function Login() {

  const dispatch=useDispatch();
   

    const [formData,setFormData]=useState({
         email:"",
         password:""
    });

    const handleLogin=(event)=>{
        
    event.preventDefault();
    myAction(formData,dispatch);

    login(formData).then((res)=>{

    if(res.token){
      alert("successfully login");
    }
    else{
      console.log(res.message);
      alert("password wrong")
    }
     

    })


    }

    
  return (
    <div>

     Email:<input type="email" placeholder='please enter your email'  onChange={(event)=>{

 setFormData({...formData,email:event.target.value})

     }} />
     password:<input type="password" placeholder='please enter your password' onChange={(event)=>{

 setFormData({...formData,password:event.target.value})

     }}  />
     
     <input type="submit" onClick={handleLogin}/>
    

    </div>
  )
}

export default Login
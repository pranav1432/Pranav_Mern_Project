import React from 'react'
import { useState } from 'react'
import { signup } from '../Api/authentication';
import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react'
import { login_and_signup_handler } from '../Redux/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function SignIn() {

    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    })

    let dispatch=useDispatch();
    let navigate=useNavigate();



    const handleForm=(event)=>{

        event.preventDefault();

          
         
         signup(formData).then((res)=>{

          console.log(res);
          if(res.token){
            alert(res.message)
            localStorage.setItem("token",res.token);
            navigate("/posts");
          }
          else{
            console.log(res.message);
            alert(res.message)
          }


         })
         

    }

  return (
    <div>
      

      <FormControl>
      <FormLabel>Name</FormLabel>
        <Input type='text' placeholder='Please Enter Your Name' onChange={(event)=>{

         setFormData({...formData,name:event.target.value})

        }} />
        <FormLabel>Email address</FormLabel>
        <Input type='email' placeholder='Please Enter Email address'  onChange={(event)=>{

         setFormData({...formData,email:event.target.value})

        }}/>
        <FormLabel>Password</FormLabel>
        <Input type='password' placeholder='Please Enter your password'  onChange={(event)=>{

         setFormData({...formData,password:event.target.value})

        }}/>


        


        <Button fontSize="20" onClick={handleForm} colorScheme="#1877f2" marginTop={5} p='6' fontWeight="600" w="100%" bg="#1877f2">Sign up</Button>

        <Text p="5">Forgot Password ?</Text>

        <hr />

        <Button onClick={()=>{

            login_and_signup_handler(false,dispatch);

        }} m="5" p="5" colorScheme=" #42b72a" bg="#42b72a" >Already an account ?</Button>


      </FormControl>

     



    </div>
  )
}

export default SignIn
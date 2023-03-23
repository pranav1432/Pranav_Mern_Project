import React from 'react'
import { useState } from 'react'
import { signup } from '../Api/authentication';
import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react'


function SignIn() {

    const [formData,setFormData]=useState({
        name:"",
        email:"",
        age:"",
        password:""
    })


    const handleForm=(event)=>{

        event.preventDefault();

          
         
         signup(formData).then((res)=>{

          if(res.user){
            alert("signup Successfull")
          }
          else{
            console.log(res.message);
            alert("email id already exist")
          }


         })
         

    }

  return (
    <div>
      

      <FormControl>
      <FormLabel>Name</FormLabel>
        <Input type='text' placeholder='Please Enter Your Name' />
        <FormLabel>Email address</FormLabel>
        <Input type='email' placeholder='Please Enter Email address' />
        <FormLabel>Password</FormLabel>
        <Input type='password' placeholder='Please Enter your password' />


        


        <Button fontSize="20" colorScheme="#1877f2" marginTop={5} p='6' fontWeight="600" w="100%" bg="#1877f2">Sign up</Button>

        <Text p="5">Forgot Password ?</Text>

        <hr />

        <Button m="5" p="5" colorScheme=" #42b72a" bg="#42b72a" >Already an account ?</Button>


      </FormControl>

     



    </div>
  )
}

export default SignIn
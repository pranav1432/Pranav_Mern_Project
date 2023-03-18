import React from 'react'
import { useState } from 'react'
import { signup } from '../Api/authentication';

function SignIn() {

    const [formData,setFormData]=useState({
        name:"",
        email:"",
        age:"",
        password:""
    })


    const handleForm=(event)=>{

        event.preventDefault();

         //for frontend we have to post data in json server
         
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
      

      <form>
        

        Name:<input type="text" placeholder='Please Enter Name' onChange={(event)=>{
           
           setFormData({...formData,name:event.target.value})


        }}/>
        Email:<input type="email" placeholder='Please Enter Email' onChange={(event)=>{
           
           setFormData({...formData,email:event.target.value})


        }} />
        Password:<input type="password" placeholder='Please Enter Password' onChange={(event)=>{
           
           setFormData({...formData,password:event.target.value})


        }}/>
        Age:<input type="number" placeholder='Please Enter age' onChange={(event)=>{
           
           setFormData({...formData,age:event.target.value})

        }}/>

        <input type="submit" onClick={handleForm} />



      </form>

     



    </div>
  )
}

export default SignIn
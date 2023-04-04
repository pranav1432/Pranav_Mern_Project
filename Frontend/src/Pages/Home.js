import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import "./Home.css"
import Login from './Login'
import SignIn from './SignIn'
function Home() {

    let value=useSelector((storeData)=>storeData.login_signup_handler);

    return (
        <Box className="parent">

            <Box className='facebook_image_with_form'>
                 
                 <Box className='image_content'>
                 <Box w="65%" margin="auto"><img width="100%" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook" /></Box>
                 <Text fontWeight="700" fontSize="20px" w="75%" margin="auto" marginTop="-13px"  >Facebook helps you connect and share with the people in your life.</Text>
                 </Box>
               

                <Box className="parent_form">

                    {value?<SignIn/>:<Login/>}
                  
                </Box>  


             </Box>



        </Box>
    )
}

export default Home
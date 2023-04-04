import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    
    <Box position="sticky" top="0px" w="100vw" bg="blue" color="white" fontSize="20px" fontWeight="500" display="flex" justifyContent="space-around" padding="12px">

          <Link to="/home" >Home</Link>
          <Link to="/login" >Profile</Link>
          <Link to="/login" >Friends</Link>
          <Link to="/Signin" >Logout</Link>
      
      
    </Box>
  )
}

export default Navbar
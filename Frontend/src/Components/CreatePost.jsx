import { Box } from '@chakra-ui/react'
import React from 'react'

function CreatePost() {
  return (
    <Box>

             <Box p="5px"  w="88%" margin="20px 0px 20px 0px" alignItems="center" display="flex" justifyContent="space-evenly" border="1px solid grey">

                 <Box>Profile</Box>
                 <Box border="1px solid black" borderRadius="15px" padding="8px"><input type="text" placeholder='Whats on your Mind' /></Box>


             </Box>

    </Box>
  )
}

export default CreatePost
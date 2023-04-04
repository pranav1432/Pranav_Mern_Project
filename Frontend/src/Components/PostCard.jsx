import React from 'react'
import { Avatar, Box, Button, Heading, IconButton } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter,Flex,Text,Image} from '@chakra-ui/react'
import { BiLike,BiChat,BiShare } from "react-icons/bi"
import {BsThreeDotsVertical } from "react-icons/bs"
function PostCard({name="pranav",description="my name is [ranajifjsijfisjipaskfp"}) {
  return (
    <Card zIndex="-1" maxW='md'>
    <CardHeader>
      <Flex spacing='4'>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
          <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
          <Box>
            <Heading size='sm'>{name}</Heading>
            <Text>Creator</Text>
          </Box>
        </Flex>
        <IconButton
          variant='ghost'
          colorScheme='gray'
          aria-label='See menu'
          icon={<BsThreeDotsVertical />}
        />
      </Flex>
    </CardHeader>
    <CardBody>
      <Text>
       {description}
      </Text>
    </CardBody>
    <Image
      objectFit='cover'
      src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Chakra UI'
    />
  
    <CardFooter
      justify='space-between'
      flexWrap='wrap'
      sx={{
        '& > button': {
          minW: '136px',
        },
      }}
    >
      <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
        Like
      </Button>
      <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
        Comment
      </Button>
      <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
        Share
      </Button>
    </CardFooter>
  </Card>
  
  )
}

export default PostCard
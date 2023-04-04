import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Avatar, Box, Button, Heading, IconButton } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Flex, Text, Image } from '@chakra-ui/react'
import { BiLike, BiChat, BiShare } from "react-icons/bi"
import { BsThreeDotsVertical } from "react-icons/bs"
import PostCard from '../Components/PostCard'
import CreatePost from '../Components/CreatePost'
import { getPosts } from '../Api/getPosts'


function Posts() {

  let [postdata, setPostData] = useState([]);

  useEffect(() => {

    getPosts().then((res) => {

      if (res.post) {
        setPostData(res.post);
        console.log(res.post)
      }
      else {
        alert(res.post);
      }

    })

  }, [])



  return (
    <Box w="100vw">

      <Navbar />


      <Box display="grid" gridTemplateColumns="repeat(3,1fr)"   >

        <Box position="fixed" left="0" >  hello</Box>
        <Box position="relative" left="100%" >

          <CreatePost />

          {postdata.map((ele) => {

            return <PostCard name={ele.owner.name} description={ele.caption} />
          })
          }



        </Box>
        <Box position="fixed" right="0">hello</Box>

      </Box>

    </Box>
  )
}

export default Posts
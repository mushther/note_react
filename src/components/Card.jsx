import { AttachmentIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Text, useToast } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { FaEye, FaStar } from "react-icons/fa";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { AuthContextProvider } from '../context/ContextApi';
import axios from 'axios';

const Card = ({ cardDate, cardHeading, bgColor, el }) => {
    const toast = useToast()
    const [wishList] = useState(el.wishList);
    const { handleAddNoteColor } = useContext(AuthContextProvider)

    const updateViewedWishList = (msg, id) => {
        axios.patch(`http://localhost:8080/note/${id}`,
            { wishList: msg }
        ).then((res) => {
            if (msg === "Yes") {
                toast({
                    title: 'Added',
                    description: "Note is Added to Favourite List.",
                    status: 'success',
                    duration: 6000,
                    isClosable: true,

                })
            } else if (msg === "No") {
                toast({
                    title: 'Removed',
                    description: "Note is Removed to Favourite List.",
                    status: 'warning',
                    duration: 6000,
                    isClosable: true,

                })
            }
        }).catch((err) => {
            toast({
                title: 'Not Added',
                description: "Note is not Added to Favourite.",
                status: 'error',
                duration: 6000,
                isClosable: true,
            })
        })
    }
    const handleClick = (e) => {
        localStorage.setItem("data", JSON.stringify(el))
        handleAddNoteColor(bgColor);
        //console.log(el);
    }

    return (
        <Box bg={bgColor} borderRadius={10} w={'100%'} transition={'width 1s,height 1s'} h={40} p={4} onClick={() => { handleClick() }} _hover={{ position: 'relative', zIndex: '2', width: "110%", height: 44, borderTop: "6px solid black" }}>
            <Flex justifyContent={'space-between'}>
                <Text fontWeight='semibold' display={'flex'} justifyContent='start' fontSize={'xl'}><AttachmentIcon /></Text>
                <Flex gap={1}>
                    {wishList === "Yes" ?
                        <Link>
                            <Text color="black" fontSize={20} onClick={() => { updateViewedWishList("No", el.id) }} ><FaStar /></Text>
                        </Link> :
                        <Link>
                            <Text color="gray.400" fontSize={20} onClick={() => { updateViewedWishList("Yes", el.id) }} ><FaStar /></Text>
                        </Link>
                    }
                    <Text _hover={{ bg: "none", color: "black" }} bg={'black'} color={'white'} border={"1px solid black"} borderRadius={15} style={{ padding: "0px 6px 0px 6px" }} display={"flex"} alignItems={"center"} fontSize={10} gap={1} ><FaEye />{el.viewed}</Text>
                </Flex>
            </Flex>
            <Heading fontFamily={'cursive'} size={'md'} fontWeight='semibold' >{cardHeading.slice(0, 15)}</Heading>
            <Text mt={14} display={'flex'} justifyContent='space-between' gap={3} alignItems={'end'} >
                <Text fontFamily={'cursive'} fontSize={'sm'} >{cardDate.slice(0, 15)}</Text>
                <Link to='/updateNote'>
                    <Text onClick={() => { handleClick() }} border={"1px solid black"} color={'white'} borderRadius={"50%"} p={1} _hover={{ fontSize: '15px', bg: "none", color: "black" }} bg="black"><MdOutlineModeEditOutline /></Text>
                </Link>

            </Text>

        </Box>
    )
}

export default Card
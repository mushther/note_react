import { AttachmentIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { FaEye, FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContextProvider } from '../context/ContextApi';
import axios from 'axios';

const Card = ({ cardDate, cardHeading, bgColor, el }) => {
    const [view, setView] = useState(0);
    const { handleAddNoteColor } = useContext(AuthContextProvider)
    const updateViewed = (view1, id) => {
        axios.patch(`http://localhost:8080/note/${id}`,
            { viewed: view1 + 1 }
        )
    }
    const handleClick = (e) => {
        localStorage.setItem("data", JSON.stringify(el))
        handleAddNoteColor(bgColor);
        updateViewed(el.viewed, el.id);
        //console.log(el);
    }

    //setViewed(viewed + 1);

    return (
        <Box bg={bgColor} borderRadius={10} p={4} onClick={() => { handleClick() }} _hover={{ borderTop: "6px solid black" }}>
            <Flex justifyContent={'space-between'}>
                <Text fontWeight='semibold' display={'flex'} justifyContent='start' fontSize={'xl'}><AttachmentIcon /></Text>
                <Text _hover={{ fontSize: '15px', color: 'white' }} display={"flex"} alignItems={"center"} gap={1} ><FaEye />{el.viewed}</Text>
            </Flex>
            <Heading fontFamily={'cursive'} size={'md'} fontWeight='semibold' >{cardHeading}</Heading>
            <Text fontFamily={'cursive'} >{cardDate.slice(0, 15)}</Text>
            <Text display={'flex'} justifyContent='end'  >
                <Link to='/updateNote'>
                    <Text onClick={() => { handleClick() }} _hover={{ fontSize: '15px', color: 'white' }}><FaRegEdit /></Text>
                </Link>

            </Text>

        </Box>
    )
}

export default Card
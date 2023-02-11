import { AttachmentIcon } from '@chakra-ui/icons';
import { Box, Heading, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContextProvider } from '../context/ContextApi';

const Card = ({ cardDate, cardHeading, bgColor, el }) => {
    const { handleAddNoteColor } = useContext(AuthContextProvider)

    const handleClick = (e) => {
        localStorage.setItem("data", JSON.stringify(el))
        handleAddNoteColor(bgColor);
    }

    return (
        <Box bg={bgColor} borderRadius={10} p={4} onClick={() => { handleClick() }}>
            <Text fontWeight='semibold' display={'flex'} justifyContent='start' fontSize={'xl'}><AttachmentIcon /></Text>
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
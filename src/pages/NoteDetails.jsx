import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { FaRegEdit, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Delete from '../components/Delete';
import { AuthContextProvider } from '../context/ContextApi';
import axios from 'axios';

const NoteDetails = () => {
    const { handleAddNoteColor } = useContext(AuthContextProvider)
    const [data] = useState(JSON.parse(localStorage.getItem("data")));
    //const [id] = useState(data.id)
    const updateViewed = (view1, id) => {
        axios.patch(`http://localhost:8080/note/${id}`,
            { viewed: view1 + 1 }
        )
    }
    useEffect(() => {
        updateViewed(data.viewed, data.id)
    })
    const handleColorChange = () => {
        handleAddNoteColor(data.bgColor);
    }

    return (
        <Box bg={data.bgColor} h='585px' borderRadius={10} w={'82%'} ml={'16%'} p={"5% 10% 10% 10%"} mt={'106px'}>
            <Heading fontFamily={'cursive'}>Note Details</Heading>

            <Box >
                <Flex justifyContent={'space-between'}>
                    <Heading fontFamily={'cursive'} size={'md'}>{data.title}</Heading>
                    <Text fontFamily={'cursive'} >Date: {data.noteDate}</Text>
                </Flex>
                <br />
                <br />
                <Flex border={'1px solid black'} h='350px' p={5} borderRadius='xl' justifyContent={'space-between'} flexDirection='column'>
                    <Text fontFamily={'cursive'} textAlign={'start'}>{data.discription}</Text>
                    <Text display={'flex'} gap={3} fontSize={25} justifyContent='end'>
                        <Link to='/updateNote'>
                            <Text onClick={() => { handleColorChange() }} ><FaRegEdit /></Text>
                        </Link>
                        <Delete />
                    </Text>
                </Flex>
            </Box>
        </Box>
    )
}

export default NoteDetails
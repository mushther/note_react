import { Box, Circle, Flex, Heading, Spacer } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { FaHome } from 'react-icons/fa';
import { IoIosColorPalette } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AuthContextProvider } from '../context/ContextApi';

const Navbar = () => {
    const { color1, handleThemeChange } = useContext(AuthContextProvider);

    return (
        <Flex top={'0px'} position={'fixed'} bg={color1} w='100%' minWidth='max-content' alignItems='center' gap='2' padding={2}>
            <Link to='/'>
                <Box p='2'>
                    <Heading fontWeight={'bold'} display='flex' alignItems={'center'} gap={5} fontFamily={'cursive'}><FaHome /> Notes</Heading>
                </Box>
            </Link>
            <Spacer />
            <Circle size='40px' fontSize={'3xl'}><IoIosColorPalette /></Circle>
            <Circle size='30px' border={'1px solid black'} bg='aqua' onClick={() => { handleThemeChange('aqua') }} color='white' _hover={{ border: '2px solid white' }}></Circle>
            <Circle size='30px' border={'1px solid black'} bg='pink' onClick={() => { handleThemeChange('pink') }} color='white' _hover={{ border: '2px solid white' }}></Circle>
            <Circle size='30px' border={'1px solid black'} bg='lightgreen' onClick={() => { handleThemeChange('lightgreen') }} color='white' _hover={{ border: '2px solid white' }}></Circle>


        </Flex>
    )
}
export default Navbar
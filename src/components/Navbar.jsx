import { Box, Circle, Flex, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FaApple, FaHome } from 'react-icons/fa';
import { IoIosColorPalette } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AuthContextProvider } from '../context/ContextApi';
import Search from './Search';

const Navbar = () => {
    const { color1, handleThemeChange } = useContext(AuthContextProvider);

    return (
        <Flex top={'0px'} position={'fixed'} bg={color1} w='100%' minWidth='max-content' alignItems='center' justifyContent={'space-between'} gap='2' padding={2}>

            <Link to='/'>
                <Box p='2'>
                    <Heading fontWeight={'bold'} display='flex' alignItems={'center'} gap={5} fontFamily={'cursive'}><FaHome /> Notes</Heading>
                </Box>
            </Link>
            <Flex w={"60%"} >
                <Search />
            </Flex>
            <Flex alignItems={'center'}>
                <Link to='/likeimage'>
                    <Circle size='40px' fontSize={'3xl'}><FaApple /></Circle>
                </Link>
                <Circle size='40px' fontSize={'3xl'}><IoIosColorPalette /></Circle>
                <Circle size='30px' border={'1px solid black'} bg='aqua' onClick={() => { handleThemeChange('aqua', 1) }} color='white' _hover={{ border: '2px solid white' }}></Circle>
                <Circle size='30px' ml={2} border={'1px solid black'} bg='pink' onClick={() => { handleThemeChange('pink', 1) }} color='white' _hover={{ border: '2px solid white' }}></Circle>
                <Circle size='30px' ml={2} border={'1px solid black'} bg='lightgreen' onClick={() => { handleThemeChange('lightgreen', 1) }} color='white' _hover={{ border: '2px solid white' }}></Circle>
            </Flex>


        </Flex>
    )
}
export default Navbar
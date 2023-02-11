import { AddIcon } from '@chakra-ui/icons'
import { Circle, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContextProvider } from '../context/ContextApi'

const SideNav = () => {
    const { color1, handleAddNoteColor } = useContext(AuthContextProvider);

    return (
        <Flex
            margin='0'
            top={'55px'}
            padding='0'
            pt={'100px'}
            width='14%'
            //  bg='#f1f1f1'
            bg={color1}
            position='fixed'
            height='100%'
            overflow='auto'
            flexDirection={'column'}
            justifyContent='start'
            alignItems={'center'}
            gap='10px'
            minH={'max-content'}
        >
            <Link to='/addnote'>
                <Circle size='40px' bg='tomato' color='white' _hover={{
                    border: '2px solid white'
                }}>
                    <AddIcon />
                </Circle>
            </Link>
            <Circle onClick={() => { handleAddNoteColor('teal') }} size='40px' bg='teal' _hover={{ border: '2px solid white' }}></Circle>
            <Circle onClick={() => { handleAddNoteColor('yellow') }} size='40px' bg='yellow' _hover={{ border: '2px solid white' }}></Circle>
            <Circle onClick={() => { handleAddNoteColor('tomato') }} size='40px' bg='tomato' _hover={{ border: '2px solid white' }}></Circle>
            <Circle onClick={() => { handleAddNoteColor('skyblue') }} size='40px' bg='skyblue' _hover={{ border: '2px solid white' }}></Circle>
            <Circle onClick={() => { handleAddNoteColor('green') }} size='40px' bg='green' _hover={{ border: '2px solid white' }}></Circle>
            <Circle onClick={() => { handleAddNoteColor('orange') }} size='40px' bg='orange' _hover={{ border: '2px solid white' }}></Circle>
            <Circle onClick={() => { handleAddNoteColor('white') }} size='40px' bg='white' _hover={{ border: '2px solid black' }}></Circle>


        </Flex>
    )
}

export default SideNav
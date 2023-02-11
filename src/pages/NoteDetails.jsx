import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Flex, Heading, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { MdDelete } from 'react-icons/md';
import { FaRegEdit, } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContextProvider } from '../context/ContextApi';
import axios from 'axios';

const NoteDetails = () => {
    const toast = useToast();
    const navigate = useNavigate()
    const [data] = useState(JSON.parse(localStorage.getItem("data")));
    const { handleAddNoteColor } = useContext(AuthContextProvider)

    const handleDelete = (id) => {
        onClose();
        axios.delete(`http://localhost:8080/note/${id}`).then(res => {
            toast({
                title: 'Note Deleted.',
                description: "Your note deleted successfully.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            navigate("/");
        })

    }
    const handleColorChange = () => {
        handleAddNoteColor(data.bgColor);
    }
    //delete
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
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
                        <Text onClick={onOpen}><MdDelete /></Text>

                        <AlertDialog
                            isOpen={isOpen}
                            leastDestructiveRef={cancelRef}
                            onClose={onClose}
                        >
                            <AlertDialogOverlay>
                                <AlertDialogContent>
                                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                        Delete Note
                                    </AlertDialogHeader>

                                    <AlertDialogBody>
                                        Are you sure? You can't undo this action afterwards.
                                    </AlertDialogBody>

                                    <AlertDialogFooter>
                                        <Button ref={cancelRef} onClick={onClose}>
                                            Cancel
                                        </Button>
                                        <Button colorScheme='red' onClick={() => { handleDelete(data.id) }} ml={3}>
                                            Delete
                                        </Button>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialogOverlay>
                        </AlertDialog>
                    </Text>
                </Flex>
            </Box>
        </Box>
    )
}

export default NoteDetails
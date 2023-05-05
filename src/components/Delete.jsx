import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { AuthContextProvider } from '../context/ContextApi';
import axios from 'axios';

const Delete = () => {
    const toast = useToast();
    const navigate = useNavigate()
    const [data] = useState(JSON.parse(localStorage.getItem("data")));
    const { handleAddNoteColor } = useContext(AuthContextProvider)

    const handleDelete = (id) => {
        console.log(id);
        onClose();
        axios.delete(`http://localhost:8080/note/${id}`).then(res => {
            toast({
                title: 'Note Deleted.',
                description: "Your note deleted successfully.",
                status: 'warning',
                duration: 9000,
                isClosable: true,
            })
            navigate("/");
        }).catch((err) => {
            toast({
                title: 'Note is Not Deleted.',
                description: "Your note is not deleted.",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        })

    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    return (
        <>
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

        </>
    )
}

export default Delete
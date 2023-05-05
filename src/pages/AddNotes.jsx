import { Box, Text, FormControl, FormLabel, Heading, Input, Spacer, Textarea, Button, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { FaSave } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContextProvider } from '../context/ContextApi'


const initialNoteData = {
    title: "",
    discription: "",
    bgColor: "",
    noteDate: Date(),
    viewed: 0
}

const AddNotes = () => {
    const toast = useToast()
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const { color1, addNoteColor } = useContext(AuthContextProvider);



    const [formData, setFormData] = useState(initialNoteData);
    //https://note-app-database.vercel.app/note
    // console.log(formData);
    const postNoteData = () => {
        setIsLoading(true);
        axios.post(`http://localhost:8080/note`, formData).then(res => {
            setIsLoading(false);
            toast({
                title: 'Note Saved.',
                description: "We've saved your note for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            navigate("/");
        }).catch((err) => {
            console.log(err);
            setIsLoading(false)
            toast({
                title: 'Not Saved.',
                description: "Sorry We've unable to saved your note.",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        })
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    //console.log(formData);
    return (
        <Box p={'2% 10% 10% 10%'} h='585px' borderRadius={10} w={'82%'} ml={'16%'} mt={'106px'}>
            <Heading fontFamily={'cursive'}>Add Note</Heading>
            <FormControl>
                <FormLabel fontFamily={'cursive'}>Title</FormLabel>
                <Input
                    type='text'
                    name='title'
                    fontFamily={'cursive'}
                    placeholder='Write title'
                    onChange={(e) => { handleOnChange(e) }}
                    value={formData.title}
                />
                <FormLabel fontFamily={'cursive'}>Write Note</FormLabel>
                <Textarea
                    name={'discription'}
                    fontFamily={'cursive'}
                    placeholder='Write Start Notes here ....'
                    onChange={(e) => { handleOnChange(e) }}
                    value={formData.discription}
                />
                <FormLabel fontFamily={'cursive'}>Date</FormLabel>
                <Input
                    name={'noteDate'}
                    onChange={() => { handleOnChange() }}
                    value={formData.noteDate}
                />
                <FormLabel fontFamily={'cursive'}>Color</FormLabel>
                <Input
                    name={'bgColor'}
                    fontFamily={'cursive'}
                    onChange={(e) => { handleOnChange(e) }}
                    value={formData.bgColor = addNoteColor}
                />
                <br />
                <br />
                <Text
                    p='3px'
                    borderRadius={6}
                    border="1px solid black"
                    w='20%'
                    bg={addNoteColor}>{addNoteColor.toUpperCase()}</Text>
                <Spacer />
                <br />
                <Button onClick={postNoteData} bg={color1} w='auto' isLoading={isLoading} loadingText='Saving' gap={2} _hover={{ border: "1px solid black", fontSize: "18px" }}><FaSave /> Save Note</Button>
            </FormControl>
        </Box>
    )
}

export default AddNotes
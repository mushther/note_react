import { Box, Button, FormControl, FormLabel, Heading, Input, Spacer, Text, Textarea, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { FaChartBar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContextProvider } from '../context/ContextApi'

const UpdateNote = () => {
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast();
    const { color1, addNoteColor } = useContext(AuthContextProvider);
    //const [colorTheme, setColorTheme] = useState(addNoteColor)
    const [data] = useState(JSON.parse(localStorage.getItem("data")));
    const navigate = useNavigate();

    const initialNoteData = {
        title: data.title,
        discription: data.discription,
        bgColor: addNoteColor,
        noteDate: Date(),
        viewed: data.viewed + 1
    }
    const [formData, setFormData] = useState(initialNoteData);
    //https://note-app-database.vercel.app/note
    console.log("outOfFunction", formData);

    const updateNoteData = (id) => {
        setIsLoading(true)
        console.log(formData);
        axios.put(`https://renderapi-h6ct.onrender.com/note/${id}`, formData).then(res => {
            setIsLoading(false)
            toast({
                title: 'Note Updated.',
                description: "We've updated your note successfully.",
                status: 'success',
                duration: 6000,
                isClosable: true,
            })
            navigate("/");
        })
            .catch((error) => {
                setIsLoading(false);
                toast({
                    title: 'Not Updated.',
                    description: "Sorry We've unable to updated your note.",
                    status: 'error',
                    duration: 6000,
                    isClosable: true,
                })
                console.log(error.response.data);
            })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <Box p={'2% 10% 10% 10%'} h='685px' borderRadius={10} w={'82%'} ml={'16%'} mt={'106px'}>
            <Heading fontFamily={'cursive'} pb={5}>UpdateNote Note</Heading>
            <FormControl border={'1px solid black'} p={5} borderRadius={10}>
                <FormLabel fontFamily={'cursive'}>Title</FormLabel>
                <Input
                    name='title'
                    onChange={(e) => { handleChange(e) }}
                    value={formData.title}
                    fontFamily={'cursive'}
                    placeholder='Write title '
                    border={"0px solid black"}
                    focusBorderColor="none"
                    ml={-3}
                    _focusVisible={{
                        border: "0px solid red"
                    }}
                />
                <FormLabel fontFamily={'cursive'}>Write Note</FormLabel>
                <Textarea
                    name='discription'
                    onChange={(e) => { handleChange(e) }}
                    value={formData.discription}
                    fontFamily={'cursive'}
                    placeholder='Write Start Notes here ....'
                    border={"0px solid black"}
                    focusBorderColor="none"
                    ml={-3}
                    _focusVisible={{
                        border: "0px solid red"
                    }}
                />
                <FormLabel fontFamily={'cursive'}>Date</FormLabel>
                <Input
                    name='noteDate'
                    onChange={(e) => { handleChange(e) }}
                    value={formData.noteDate}
                    border={"0px solid black"}
                    focusBorderColor="none"
                    ml={-3}
                    _focusVisible={{
                        border: "0px solid red"
                    }}
                />
                <FormLabel fontFamily={'cursive'}>Color</FormLabel>
                <Input type='color' name='bgColor'
                    onChange={(e) => { handleChange(e) }} />

                <Spacer />
                <br />
                <Button onClick={() => { updateNoteData(data.id) }} bg={color1} w='auto' isLoading={isLoading} loadingText='Saving' gap={2} _hover={{ border: "1px solid black", fontSize: "18px" }}><FaChartBar />Update Note</Button>
            </FormControl>
        </Box>
    )
}

export default UpdateNote
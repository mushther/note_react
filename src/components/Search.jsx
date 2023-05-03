import { Box, Text, Input } from '@chakra-ui/react'
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { AuthContextProvider } from '../context/ContextApi';



const Search = () => {
    const [value, setValue] = useState("");
    const { handleGetData } = useContext(AuthContextProvider);

    const handleSearch = () => {
        // e.preventDefault()
        axios.get(`http://localhost:8080/note?q=${value}`).then((res) => {
            handleGetData(res.data);
            // setValue("");
            // console.log(res.data);
        }).catch((err) =>
            console.log(err)
        )
    }
    const handleSubmit = (e) => {
        setValue(e.target.value);
        handleSearch();
        // setFlag(false);
    }
    return (
        <Box w={"100%"} display={'flex'} gap={1}
            border={"px solid black"} borderRadius={10} backgroundColor={'gray.200'} >
            <Text
                size='40px'
                display={'flex'}
                justifyContent={'end'}
                align={'center'}
                w={'7%'}
                fontSize={'2xl'}
                p={2}
                border={"0px solid black"}
                borderRadius={8}
                onClick={handleSubmit}><FaSearch /></Text>
            <Input
                w={"100%"}
                placeholder='Search Notes...'
                border={"0px solid black"}
                focusBorderColor="none"
                ml={-3}
                _focusVisible={{
                    border: "0px solid red"
                }}
                value={value}
                onChange={(e) => { handleSubmit(e) }}
            />
        </Box>
    )
}

export default Search

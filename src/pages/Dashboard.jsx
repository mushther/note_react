import { Box, Grid, Heading } from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { Link, } from 'react-router-dom';
import Card from '../components/Card'
import { AuthContextProvider } from '../context/ContextApi';
import { FaPlus } from 'react-icons/fa';

const Dashboard = () => {
    //const [data1, setData1] = useState([]);
    const { handleGetData, data } = useContext(AuthContextProvider);

    //console.log(Date());
    //https://note-app-database.vercel.app/note
    const getData = () => {
        axios.get('http://localhost:8080/note').then((res) => {
            //setData(res.data);
            //console.log(newMsg);
            handleGetData(res.data);
        })
    }

    useEffect(() => {
        getData()
    }, []);

    //console.log(data);

    return (
        <Box w={'86%'} ml={'14%'} mt={'56px'}>
            <Heading pt={'40px'} fontFamily={'cursive'}> Dashboard</Heading>

            <Grid w='95%' m='auto' p={10} gridTemplateColumns={'repeat(4, 1fr)'} gap={5}>
                {data.map((el) => (
                    <Link to='/notedetails' key={el.id}>
                        <Card
                            key={el.id}
                            bgColor={el.bgColor}
                            cardDate={el.noteDate}
                            cardHeading={el.title}
                            cardDisciption={el.discription}
                            el={el}
                        />
                    </Link>
                ))

                }
                <Link to='/addnote'>

                    <Box
                        bg={"yellow"}
                        borderRadius={10}
                        w={'100%'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        h={40} p={4}
                        fontSize={'40px'}
                        transition={'fontSize 2s'}
                        _hover={{ fontSize: "50px", borderTop: "6px solid black" }}>
                        <FaPlus /></Box>
                </Link>
            </Grid>
        </Box>
    )
}

export default Dashboard
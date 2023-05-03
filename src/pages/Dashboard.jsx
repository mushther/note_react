import { Box, Grid, Heading } from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { Link, } from 'react-router-dom';
import Card from '../components/Card'
import { AuthContextProvider } from '../context/ContextApi';

const Dashboard = () => {
    //const [data1, setData1] = useState([]);
    const { handleGetData, data } = useContext(AuthContextProvider);

    //console.log(Date());
    //https://note-app-database.vercel.app/note
    const getData = () => {
        axios.get('http://localhost:8080/note').then((res) => {
            // setData(res.data);
            handleGetData(res.data);
        })
    }

    useEffect(() => {
        getData()
    }, []);

    //console.log(data);

    return (
        <Box
            bg='#f1f1f1'
            //bg='#c9c6c6'
            h={'2xl'} w={'86%'} ml={'14%'} mt={'56px'}>
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
            </Grid>
        </Box>
    )
}

export default Dashboard
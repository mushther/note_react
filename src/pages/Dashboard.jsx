import { Box, Grid, Heading, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { Link, } from 'react-router-dom';
import Card from '../components/Card'
import { AuthContextProvider } from '../context/ContextApi';
import { FaPlus } from 'react-icons/fa';

const Dashboard = () => {
    const toast = useToast();
    //const [data1, setData1] = useState([]);
    const { handleGetData, data } = useContext(AuthContextProvider);

    //console.log(Date());
    //http://localhost:8080/note
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

    const updateViewedWishList = (msg, id) => {
        axios.patch(`http://localhost:8080/note/${id}`,
            { wishList: msg }
        ).then((res) => {
            getData()
            if (msg === "Yes") {
                toast({
                    title: 'Added',
                    description: "Note is Added to Favourite List.",
                    status: 'success',
                    duration: 6000,
                    isClosable: true,

                })
            } else if (msg === "No") {
                toast({
                    title: 'Removed',
                    description: "Note is Removed to Favourite List.",
                    status: 'warning',
                    duration: 6000,
                    isClosable: true,

                })
            }
        }).catch((err) => {
            toast({
                title: 'Not Added',
                description: "Note is not Added to Favourite.",
                status: 'error',
                duration: 6000,
                isClosable: true,
            })
        })
    }

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
                            updateViewedWishList={updateViewedWishList}
                        />
                    </Link>
                ))

                }
                <Link to='/addnote'>

                    <Box
                        bg={"pink"}
                        borderRadius={10}
                        w={'100%'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        h={40} p={4}
                        fontSize={'40px'}
                        transition={'fontSize 2s'}
                        _hover={{ fontSize: "50px", boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset", borderTop: "6px solid black" }}>
                        <FaPlus /></Box>
                </Link>
            </Grid>
        </Box>
    )
}

export default Dashboard
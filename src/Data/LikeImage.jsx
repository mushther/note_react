import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const LikeImage = () => {
    const [data, setData] = useState([]);
    const [likeStatus, setlikeStatus] = useState("gray");

    const getData = () => {
        axios.get('http://localhost:8080/like').then((res) => {
            setData(res.data);
            console.log(res.data);
        })
    }

    const updateLike = (id) => {
        if (likeStatus === "gray") {

            axios.patch(`http://localhost:8080/like/${id}`,
                {
                    like: data[id - 1].like + 1
                }).then(res => {
                    console.log("like")
                    getData()
                    setlikeStatus("facebook");
                })
        } else if (likeStatus === "facebook") {
            axios.patch(`http://localhost:8080/like/${id}`,
                {
                    like: data[id - 1].like - 1
                }).then(res => {
                    console.log("like")
                    getData()
                    setlikeStatus('gray');
                })
        }
    }
    const updateLike1 = (id) => {

        axios.patch(`http://localhost:8080/like/${id}`,
            {
                like: data[id - 1].like + 1
            }).then(res => {
                console.log("like")
                getData()
                setlikeStatus("facebook");
            })

    }
    const updateDisLike = (id) => {
        axios.patch(`http://localhost:8080/like/${id}`,
            {
                like: data[id - 1].like - 1
            }).then(res => {
                console.log("like")
                getData()
                setlikeStatus('gray');
            })
    }


    useEffect(() => {
        getData()
    }, []);
    return (
        <Box p={'2% 10% 10% 10%'} border={"1px solid black"} h='585px' borderRadius={10} w={'82%'} ml={'16%'} mt={'106px'}>
            <Heading>Image Like</Heading>
            <br />
            <Image m='auto' w='40%' height={'300px'} src='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1akSeR.img?w=1920&h=1080&q=60&m=2&f=jpg' />
            {data.map((item) => (
                <Box>
                    <Heading>{item.name}</Heading>
                    < Heading> {item.like}</Heading>
                </Box>
            ))}
            <Flex gap={120} justifyContent={"center"}>
                <Button colorScheme={likeStatus} onClick={() => { updateLike(data[0].id) }}>Like</Button>
                <Button colorScheme='gray' onClick={() => { updateLike1(data[0].id) }}>Like</Button>
                <Button colorScheme='gray' onClick={() => { updateDisLike(data[0].id) }}>Dislike</Button>
            </Flex>

        </Box >
    )
}

export default LikeImage
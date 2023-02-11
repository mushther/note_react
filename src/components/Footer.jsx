import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <Flex position={'fixed'} w='100%' bg={'pink'} minWidth='max-content' alignItems='center' gap='2' padding={2}>
            <Box p='2'>
                <Heading size='md' fontFamily={'fantasy'}>Footer</Heading>
            </Box>
        </Flex>
    );
}

export default Footer
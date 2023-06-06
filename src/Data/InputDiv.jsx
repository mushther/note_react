import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'

const InputDiv = () => {
    const [widthSize, setWidthSize] = useState("")
    const [heightSize, setHeightSize] = useState("")

    return (
        <Flex p={'2% 10% 10% 10%'} h='685px' borderRadius={10} w={'100%'} ml={'16%'} mt={'106px'} gap={10}>
            <Box >
                <input placeholder='Enter Width Size' onChange={(e) => (setWidthSize(`${e.target.value}px`))} />
                <input placeholder='Enter Height Size' onChange={(e) => (setHeightSize(`${e.target.value}px`))} />
            </Box>
            <Box>
                <div style={{ width: widthSize, height: heightSize, border: "1px solid red" }} >{widthSize + " * " + heightSize}</div>
            </Box>
        </Flex>
    )
}

export default InputDiv
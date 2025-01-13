import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import "../../Styles/App.css"

export default function SplashScreen({ display }) {
    
    if (!display) return null;

    return (
        <Box className='splash' >
            <Heading fontSize="9xl"> NowShow</Heading>
        </Box>
    )
}

import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import "../../Styles/App.css"

export default function ResultScreen({ display, players }) {
    if (!display) return null;
    const [winnerIndex,setWinnerIndex]=useState(0);

    useEffect(() => {
        var max = Math.max.apply(null, players.list.map(function(item){
            return item.points;
         }));
         setWinnerIndex(max);
    }, [])


    return (
        <Box className='splash' >
            <Heading fontSize="9xl">Player {winnerIndex} wins</Heading>
        </Box>
    )
}

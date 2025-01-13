import {
    Tr,
    Td,
    IconButton,
    Box,
    Text,
    Checkbox
} from '@chakra-ui/react'

export default function ScoreboardItem({item, selected, setSelected}) {
    return (
        <Tr  onClick={()=>{setSelected(item.id)}} bg={selected?"gray.100":""}>
            <Td >
                Player {item.id+1}
            </Td>
            <Td>
                {item.points}
            </Td>
        </Tr>
    )
}

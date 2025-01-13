import {
    TableContainer,
    Table,
    Tbody,
    Th,
    Tr,
    Thead
} from '@chakra-ui/react'
import ScoreboardItem from './ScoreboardItem'
import "../../Styles/App.css";

export default function Scoreboard({ display, players, selectedPlayerIndex,setSelectedPlayerIndex }) {
    
    if (!display) return null;

    return (
        <>
            <TableContainer className='MiddleCenter' >
                <Table>
                    <Thead>
                        <Tr>
                            <Th>
                                Players
                            </Th>
                            <Th width="100px">
                                Points
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {players.list && players.list.map((item,i) => (
                            <ScoreboardItem key={i} item={item}  selected={selectedPlayerIndex===item.id} setSelected={setSelectedPlayerIndex}/>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

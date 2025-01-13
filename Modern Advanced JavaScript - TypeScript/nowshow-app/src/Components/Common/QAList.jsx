import {
    TableContainer,
    Table,
    Tbody,
    Text,
    Thead,
    Th,
    Tr,
    Box
} from "@chakra-ui/react"
import QuestionInfoRow from "../Configuration/QuestionInfoRow";
import { answerTags } from "../Configuration/ConfigurationScreen";
import { useDatabase } from './DatabaseProvider';
import "../../Styles/App.css";

export default function QAList({ display, selectedQuestionIndex, setSelectedQuestionIndex, askedQuestions,showData }) {

    if (!display) return null;

    const { database } = useDatabase();

    return (
        <Box className={display == "show" ? "MiddleCenter" : "QAList"}>
            <Text fontWeight="medium">Question & Answer List</Text>
            <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            <Th width="0"></Th>
                            <Th ></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {/*do not show askedQuestions in the show*/}
                        {
                            askedQuestions.length>0 ?
                                database.list.map((item, i) => (
                                    !askedQuestions.includes(i) && (
                                        <QuestionInfoRow
                                            key={i}
                                            index={i}
                                            data={item}
                                            answerTags={answerTags}
                                            selected={selectedQuestionIndex === i}
                                            setSelected={setSelectedQuestionIndex}
                                            showData={showData}
                                        />
                                    )
                                )) :
                                database.list.map((item, i) => (
                                    <QuestionInfoRow
                                        key={i}
                                        index={i}
                                        data={item}
                                        answerTags={answerTags}
                                        selected={selectedQuestionIndex === i}
                                        setSelected={setSelectedQuestionIndex}
                                        showData={showData}
                                    />
                                ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

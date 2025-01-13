import {
  Tr,
  Td,
  IconButton,
  Box,
  Text
} from '@chakra-ui/react'
import {
  EditIcon,
  DeleteIcon
} from '@chakra-ui/icons'




export default function QuestionInfoRow({ index, data, answerTags, selected, setSelected, showData }) {

  function QuestionRowsWithData() {
    return (
      <>
        <Box >
          {/* <IconButton aria-label='Edit' size='sm' icon={<EditIcon />} /> */}
          {data.question}
        </Box>
        <br></br>
        <Box >
          {/* <IconButton aria-label='Edit' size='sm' icon={<DeleteIcon />} />*/}
          {
            data.answerType == 1 ?
              (data.answers.map((item, i) => (
                <Text key={i} textColor={data.correctAnswerIndex == i && "green.200"}>{answerTags[i]} : {item}</Text>
              ))
              ) : (
                <Text>{data.answers[0]}</Text>
              )
          }
        </Box>
      </>
    )
  }

  function QuestionRowsWithOUTData() {
    return (
      <>
        <Text >Question</Text>
      </>
    )
  }

  return (
    <Tr onClick={() => { setSelected(index) }} bg={selected ? "gray.100" : ""} >
      <Td>
        {index + 1}
      </Td>
      <Td >
        {
          showData ?
            <QuestionRowsWithData /> :
            <QuestionRowsWithOUTData />
        }


      </Td>
    </Tr>
  )
}

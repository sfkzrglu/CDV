import {
    Box,
    Text,
    Input,
    Button,
    SimpleGrid
} from '@chakra-ui/react';
import { useDatabase } from '../Common/DatabaseProvider';
import "../../Styles/App.css";
import { useState, useEffect } from 'react';

export default function Question({ display, selectedQuestionIndex, timeIsUp, isAnsweredCorrectly }) {

    if (!display) return null;

    const { database } = useDatabase();
    {/*always the finel answer to check*/ }
    const [answer, setAnswer] = useState("");
    {/*used to get value from inputs.NEVER used to check answer */ }
    const [fillBlanksAnswer, setFillBlanksAnswer] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(database.list[selectedQuestionIndex]);
    {/*choosen correct answer from different type of answers */ }
    const [correctAnswer, setCorrectAnswer] = useState("");

    useEffect(() => {
        handleCorrectAnswerForShowing();
        {/*add empty strings to fillBlanksAnswer array as much as there are _ in the fill the blanks question*/ }
        if (currentQuestion.answerType === 2) {
            const blanks = [];
            currentQuestion.question.split('').forEach((char, i) => {
                if (char === '_') blanks.push({ index: i, answer: '' });
            });
            setFillBlanksAnswer(blanks);
        }

    }, []);

    useEffect(() => {
        if (timeIsUp && correctAnswer == answer) {
            isAnsweredCorrectly(true);
        } else {
            isAnsweredCorrectly(false);
        }

    }, [timeIsUp])


    const handleCorrectAnswerForShowing = () => {
        let correctAnswer;
        switch (currentQuestion.answerType) {
            case 0:
                correctAnswer = currentQuestion.answers[0];
                break;
            case 1:
                const correctAnswerIndex = currentQuestion.correctAnswerIndex;
                correctAnswer = currentQuestion.answers[correctAnswerIndex];
                break;
            case 2:
                correctAnswer = currentQuestion.answers[0];
                break;
            default:
                break;
        }
        setCorrectAnswer(correctAnswer);
    }

    const handleFillBlanksAnswerChange = (e, i) => {
        const updatedAnswers = [...fillBlanksAnswer];
        updatedAnswers[i].answer = e.target.value;
        setFillBlanksAnswer(updatedAnswers);
        {/*Fill the blanks of the question with the user answer chars and set answer to it  */ }
        if (fillBlanksAnswer.length > 0) {
            let userAnswer = '';
            currentQuestion.question.split('').map((qChar, i) => {
                if (qChar !== "_") {
                    userAnswer += qChar
                } else {
                    fillBlanksAnswer.map((inputChar) => {
                        if (i == inputChar.index) {
                            userAnswer += inputChar.answer
                        }
                    })
                }
            })
            setAnswer(userAnswer);
        }
    }


    return (
        <Box className='MiddleCenter'>
            {/*Question */}
            <Text fontSize="7xl">{database.list && currentQuestion.question}</Text>
            {/*Answer inputs by their types */}
            <Box>
                {/*Answer Type 1 - Open-ended */}
                {
                    currentQuestion.answerType == 0 &&
                    <Input value={answer} onChange={(e) => (setAnswer(e.target.value))} />
                }
                {/*Answer Type 2 - Multi Choice */}
                <SimpleGrid columns={1} spacingX='40px' spacingY='20px'>
                    {
                        currentQuestion.answerType == 1 &&
                        currentQuestion.answers.map((item, i) => (
                            <Button key={i} onClick={() => (setAnswer(item))}>{item}</Button>
                        ))

                    }
                </SimpleGrid>

                {/*Answer Type 3 - Fill the blanks */}
                <SimpleGrid columns={currentQuestion.question.length} spacingX='100px'>
                    {
                        currentQuestion.answerType == 2 &&
                        fillBlanksAnswer.map((item, i) => (
                            <Input width='100px' maxLength={1}
                                key={i}
                                value={fillBlanksAnswer[i].answer}
                                onChange={(e) => { handleFillBlanksAnswerChange(e, i) }}></Input>
                        ))

                    }
                </SimpleGrid>
            </Box>

            {/*Show answer when time is up */}
            {
                timeIsUp &&
                <Text fontSize="7xl">answer is: {correctAnswer}</Text>
            }
        </Box>
    )
}

import {
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Input,
    FormControl,
    Button,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    SimpleGrid,
    Textarea,
    Text,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Checkbox,
} from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import QAList from "../Common/QAList";
import { questionAnswerObj } from "../Objects/QuestionAnswerObj";

export const answerTags = ["A", "B", "C", "D"];

export default function ConfigurationScreen({ configuration, setConfiguration, database, setDatabase,startTheShow }) {

    const [qaData, setQAdata] = useState(questionAnswerObj);
    const [multiAnswerCorrectIndex, setMultiAnswerCorrectIndex] = useState(0);
    const [bulkText, setBulkText] = useState("");
    const [continued, setContinued] = useState(false);


    const CONFIGURATIONS_LOCALSTORAGE_STRING = "Configurations";
    const DATABASE_LOCALSTORAGE_STRING = "Database";

    {/*Update correctAnswerIndex in qaData, If clicked on any checkbox in multiple choice*/ }
    useEffect(() => {
        setQAdata((prev) => ({ ...prev, correctAnswerIndex: multiAnswerCorrectIndex }));
    }, [multiAnswerCorrectIndex]);

    const setConfigurationAndSave=(key,value)=>{
        const newConfig = { ...configuration, [key]: value };
        setConfiguration(newConfig);
        localStorage.setItem(CONFIGURATIONS_LOCALSTORAGE_STRING, JSON.stringify(newConfig));
    }

    function handleConfigurationChange(key, value) {
        {/*If countinue button is clicked. user wont be allowed to have lower number of question than in database one */ }
        if (continued) {
            if (key === "numberOfQuestions") {
                if (value < database.list.length) {
                    setConfigurationAndSave(key,database.list.length);
                    return;
                }
            }
        }
        setConfigurationAndSave(key,value);
    }

    const handleQuestionChange = (e) => {
        const { name, value } = e.target;
        setQAdata((prev) => ({ ...prev, [name]: value }));
    };

    {/* Open-ended answer input handler */ }
    const handleAnswerChange = (e, index) => {
        const { value } = e.target;
        setQAdata((prev) => {
            const updatedAnswers = [...prev.answers];
            updatedAnswers[index] = value;
            return { ...prev, answers: updatedAnswers };
        });
        setQAdata((prev) => ({ ...prev, correctAnswerIndex: 0 }));
    };

    const handleAnswerTypeChange = (index) => {
        setQAdata((prev) => ({ ...prev, answerType: index }));
    }

    const addOneqaDataToDatabase = (data) => {
        setDatabase((prev) => ({ ...prev, list: [...prev.list, data], }));
    }

    const handleAddQuestion = () => {
        if (database.list.length < configuration.numberOfQuestions) {
            {/*Checks if question and answer(s) input boxes are filled.*/ }
            if (qaData.question && qaData.answers[0] && (qaData.answerType == 1 ? qaData.answers.every(v => v) : true)) {
                const savedQAdata = JSON.parse(localStorage.getItem(DATABASE_LOCALSTORAGE_STRING));
                if (savedQAdata) {
                    //Add new QA to array
                    savedQAdata.push(qaData);
                    localStorage.setItem(DATABASE_LOCALSTORAGE_STRING, JSON.stringify(savedQAdata));
                    addOneqaDataToDatabase(qaData);
                    savedQAdata && setDatabase({ list: savedQAdata });
                } else {
                    //if there is no saved data array, create one
                    localStorage.setItem(DATABASE_LOCALSTORAGE_STRING, JSON.stringify([qaData]));
                    addOneqaDataToDatabase(qaData);
                }
            }
        }
    };

    const handleResetClick = () => {
        localStorage.clear();
        setDatabase({ list: [] });
    }

    const handleBulkTextareaChange = (e) => {
        setBulkText(e.target.value);
    }

    const handleBulkImportClick = () => {
        if (bulkText) {
            const bt = JSON.parse(bulkText);
            setDatabase((prev) => ({ ...prev, list: bt }));
            localStorage.setItem(DATABASE_LOCALSTORAGE_STRING, bulkText);
        }
    }

    const handleBulkExportClick = () => {
        const savedQAdata = localStorage.getItem('Database');
        if (savedQAdata) {
            const blob = new Blob([savedQAdata], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'data.json';
            a.click();
            a.remove();
        }
    }

    const handleContiuneClick = () => {
        const savedQAdata = JSON.parse(localStorage.getItem(DATABASE_LOCALSTORAGE_STRING));
        savedQAdata && setDatabase({ list: savedQAdata });

        const savedConfigurations = JSON.parse(localStorage.getItem(CONFIGURATIONS_LOCALSTORAGE_STRING));
        savedConfigurations && setConfiguration(savedConfigurations);

        setContinued(true);
    }

    return (
        <Box maxWidth="800px" margin="auto">
            <Text fontSize='5xl' fontWeight='bold'>Configuration</Text>

            <Button onClick={handleContiuneClick}>Continue</Button>
            <Button onClick={startTheShow}>Start The Show</Button>

            <FormLabel>Number Of Players</FormLabel>
            <NumberInput defaultValue={1} min={1} max={8} value={configuration.numberOfPlayers}
                onChange={value => handleConfigurationChange("numberOfPlayers", value)} >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            <FormLabel>Number Of Questions</FormLabel>
            <NumberInput defaultValue={1} min={1} max={64} value={configuration.numberOfQuestions}
                onChange={value => handleConfigurationChange("numberOfQuestions", value)}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            <FormLabel>Time per Question(seconds)</FormLabel>
            <NumberInput defaultValue={5} min={1} max={30} value={configuration.timePerQuestion}
                onChange={value => handleConfigurationChange("timePerQuestion", value)}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            {/*appsettings.js */}
            <FormLabel>pointsPerQuestion</FormLabel>
            <NumberInput defaultValue={1} min={1} value={configuration.pointsPerQuestion} onChange={value => handleConfigurationChange("pointsPerQuestion", value)} >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            <FormLabel>Splash Screen Time(seconds)</FormLabel>
            <NumberInput defaultValue={3} min={1} max={30} value={configuration.splashScreenTimeSeconds} onChange={value => handleConfigurationChange("splashScreenTimeSeconds", value)}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            {/***/}
            {/* Horizontal Grid - add question and answer,add button, bulk import */}
            <SimpleGrid columns={2} spacing={1}>
                {/* Add QA one by one OR bulk import*/}
                <Box>
                    <Accordion defaultIndex={[0]}>
                        {/* Add QA one by one*/}
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
                                        Add a Question & Answer
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                {/* Add QA */}
                                <FormControl>
                                    <FormLabel>Question</FormLabel>
                                    <Input value={qaData.question} name="question" onChange={handleQuestionChange} />
                                    <FormLabel>Answer</FormLabel>
                                    <Tabs variant='soft-rounded' onChange={(index) => handleAnswerTypeChange(index)}>
                                        <TabList>
                                            <Tab>Open-ended</Tab>
                                            <Tab>Multiple Choice</Tab>
                                            <Tab>Fill in the Blanks</Tab>
                                        </TabList>
                                        <TabPanels>
                                            <TabPanel>
                                                <Input value={qaData.answers[0]} name="answers" onChange={(e) => handleAnswerChange(e, 0)} />
                                            </TabPanel>
                                            <TabPanel>
                                                {Object.keys(answerTags).map((i) => (
                                                    <div key={i}>
                                                        <Checkbox isChecked={multiAnswerCorrectIndex == i} onChange={() => setMultiAnswerCorrectIndex(parseInt(i))} >{answerTags[i]}</Checkbox>
                                                        <Input value={qaData.answers[i]} name="answers" onChange={(e) => handleAnswerChange(e, i)} />
                                                    </div>
                                                ))}
                                            </TabPanel>
                                            <TabPanel>
                                                <Input value={qaData.answers[0]} name="answers" onChange={(e) => handleAnswerChange(e, 0)} />
                                            </TabPanel>
                                        </TabPanels>
                                    </Tabs>
                                    <Button onClick={handleAddQuestion}>Add Question</Button>
                                </FormControl>
                            </AccordionPanel>
                        </AccordionItem>
                        {/* Add QA by bulk import. Export saved data*/}
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
                                        Bulk Import / Export
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <Textarea value={bulkText} name="bulkText" onChange={handleBulkTextareaChange} />
                                <Button onClick={handleBulkImportClick}>Import</Button>
                                <Button onClick={handleBulkExportClick}>Export</Button>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
                {/* List Of Questions */}
                <Box>
                    <QAList display={"Config"}
                     qaList={database.list} 
                     setSelectedQuestionIndex={()=>{}} 
                     askedQuestions={()=>{}} 
                     showData={true}
                     />
                </Box>
            </SimpleGrid>

            <Button bg='red' onClick={handleResetClick}>RESET</Button>

        </Box>
    )
}

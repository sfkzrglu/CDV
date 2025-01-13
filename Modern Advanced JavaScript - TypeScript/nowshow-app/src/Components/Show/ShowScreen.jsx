import { Button, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ScoreTable from './Scoreboard';
import QAList from '../Common/QAList';
import Question from './Question';
import Timer from '../Common/Timer';
import SplashScreen from './SplashScreen';
import ResultScreen from './ResultScreen';

export default function ShowScreen({ configuration }) {

  const [screen, setScreen] = useState(0);
  const [players, setPlayers] = useState({ list: [] });
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(0);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [timeIsUp, setTimeIsUp] = useState(false);
  const [isSplashScreenSkipped, setIsSplashScreenSkipped] = useState(false);

  let initPlayers = false;


  useEffect(() => {
    {/*Create number of players based on configuration */ }
    {/*A quick way to solve the issue of useEffect being called twice */ }
    if (!initPlayers && players.list.length < configuration.numberOfPlayers) {
      for (let i = 0; i < configuration.numberOfPlayers; i++) {
        setPlayers((prev) => ({ ...prev, list: [...prev.list, { id: i, points: 0 }], }));
      }
      initPlayers = true;
    }
  }, []);

  {/*Reset timer when screen is changed */ }
  useEffect(() => {
    setTimeIsUp(false)
  }, [screen]);

  useEffect(() => {
    if (screen === 3) {
      setAskedQuestions((prev) => ([...prev, selectedQuestionIndex]));
    }
  }, [screen]);

  {/*if time is up and answer(val) is correct(true), add points to the selected player */ }
  const assignPointsToplayer = (val) => {
    if (timeIsUp && val) {
      setPlayers(prevState => ({
        list: prevState.list.map(player =>
          player.id === selectedPlayerIndex ? { ...player, points: player.points + configuration.pointsPerQuestion } : player
        )
      }));
    }
  }

  function ControlButtons() {
    return (
      <>
        <Button value={screen} onClick={() => { screen > 1 && setScreen(screen - 1) }}>Back</Button>
        <Button value={screen} onClick={() => { screen < 4 && setScreen(screen + 1) }}>Next</Button>
      </>
    )
  }

  return (
    <>
      {
        isSplashScreenSkipped &&
        <ControlButtons />
      }
      {/*Splash Screen Timer */}
      {
        <Timer seconds={configuration.splashScreenTimeSeconds}
          timeIsUp={() => { setScreen(screen + 1); setIsSplashScreenSkipped(true); }} displayHTML={false} />
      }
      <SplashScreen display={screen == 0} />

      <ScoreTable
        display={screen === 1}
        players={players}
        selectedPlayerIndex={selectedPlayerIndex}
        setSelectedPlayerIndex={setSelectedPlayerIndex} />

      <QAList
        display={screen === 2 ? "show" : null}
        selectedQuestionIndex={selectedQuestionIndex}
        setSelectedQuestionIndex={setSelectedQuestionIndex}
        askedQuestions={askedQuestions}
        showData={false}
      />

      {/*Question Timer.*/}
      <Box className='MiddleCenter'>
        {
          screen == 3 &&
          <Timer seconds={configuration.timePerQuestion} timeIsUp={() => { setTimeIsUp(true) }} displayHTML={true} />
        }
      </Box>
      <Question
        display={screen === 3}
        selectedQuestionIndex={selectedQuestionIndex}
        timeIsUp={timeIsUp}
        isAnsweredCorrectly={(v) => { assignPointsToplayer(v) }}
      />

      <ResultScreen 
      display={screen === 4} 
      players={players}
      />
    </>
  )
}

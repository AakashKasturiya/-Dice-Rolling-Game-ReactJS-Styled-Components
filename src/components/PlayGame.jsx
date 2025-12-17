// PlayGame.js
import React, { useState, useEffect } from "react";
import diceSound from '../assets/dice-roll.mp3'
import confetti from 'canvas-confetti';
import { TotalScore } from "../components/TotalScore";
import { SelecteNumber } from "../components/SelecteNumber";
import { Container } from "../components/Container";
import styled from "styled-components";
import { GameLayout } from "../components/GameLayout"
import { Instruction } from "./Instruction";






export const PlayGame = () => {

  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [error, setError] = useState(false);
  const [checkValidation, setCheckValidation] = useState(false);
  const [showInstruction, setShowInstruction] = useState(false);

  const handleCelebrate = () => {
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const GameStart = (value) => {

    if (!selectedNumber) {
      setError("You have not selected any number")
      return;
    }


    // Play dice roll sound
    const sound = new Audio(diceSound);
    sound.volume = 0.7;
    sound.play();

    if (value === selectedNumber) {
      setScore((prev) => prev + value);
      handleCelebrate();
    } else {
      setScore((prev) => prev - 2)
    }
  }

  /*Reset Game */
  const resetScoreHandler = () => {
    setScore(0);
    setSelectedNumber(null);
  }



  return (
    <div>
      <Container>
        <ScoreWrapper>
          <TotalScore score={score} />
          <SelecteNumber selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} checkValidation={checkValidation} error={error} setError={setError} />
        </ScoreWrapper>
        <GameLayout GameStart={GameStart} checkValidation={checkValidation} setCheckValidation={setCheckValidation} error={error} setScore={setScore} setShowInstruction={setShowInstruction} resetScoreHandler={resetScoreHandler} selectedNumber={selectedNumber} />
        {showInstruction ? <Instruction /> : ""}
      </Container>
    </div>
  );
};

const ScoreWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

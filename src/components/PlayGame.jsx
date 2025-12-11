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


import dice1 from "../assets/dice_1.png";
import dice2 from "../assets/dice_2.png";
import dice3 from "../assets/dice_3.png";
import dice4 from "../assets/dice_4.png";
import dice5 from "../assets/dice_5.png";
import dice6 from "../assets/dice_6.png";


export const PlayGame = () => {

  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [error, setError] = useState(false);
  const [rollDice, setRollDice] = useState(dice1);
  const [checkValidation, setCheckValidation] = useState(false);
  const [showInstruction, setShowInstruction] = useState(false);
  const [animating, setAnimating] = useState(false);


  // Array of dice images
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];


  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const handleCelebrate = () => {
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const GameStart = () => {

    if (!selectedNumber) {
      setError("You have not selected any number")
      return;
    }


    // Play dice roll sound
    const sound = new Audio(diceSound);
    sound.volume = 0.7;
    sound.play();

    const randomNumber = generateRandomNumber(1, 7);

    if (randomNumber === selectedNumber) {
      setScore((prev) => prev + randomNumber);
      handleCelebrate();
    } else {
      setScore((prev) => prev - 2)
    }
    setRollDice(diceImages[randomNumber - 1])
    setAnimating(true);
  }

  /*Reset Game */
  const resetScoreHandler = () => {
    setScore(0);
    setSelectedNumber(null);
  }

  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => {
        setAnimating(false);
      }, 1000); // Matches the animation duration
      return () => clearTimeout(timer);
    }
  }, [animating]);

  return (
    <div>
      <Container>
        <ScoreWrapper>
          <TotalScore score={score} />
          <SelecteNumber selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} checkValidation={checkValidation} error={error} setError={setError} />
        </ScoreWrapper>
        <GameLayout animating={animating} GameStart={GameStart} rollDice={rollDice} checkValidation={checkValidation} setCheckValidation={setCheckValidation} error={error} setScore={setScore} setShowInstruction={setShowInstruction} resetScoreHandler={resetScoreHandler} />
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

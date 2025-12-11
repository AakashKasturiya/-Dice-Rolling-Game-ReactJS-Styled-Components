import styled from "styled-components";

import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import { useState } from "react";

export const GameLayout = ({ animating, GameStart, rollDice, setShowInstruction, setScore, resetScoreHandler }) => {
  const [show, setShow] = useState('Show'); // State for toggle text
  const [isInstructionVisible, setIsInstructionVisible] = useState(false); // State to control instructions visibility


  // Toggle function to switch both button text and instruction visibility
  const toggleInstruction = () => {
    setIsInstructionVisible(prev => !prev); // Toggle instruction visibility
    setShow(isInstructionVisible ? 'Show' : 'Hide'); // Toggle button text
    setShowInstruction(!isInstructionVisible); // Update the parent component state
  };



  return (
    <Section>
      <GameLayoutWrapper>
        <div onClick={GameStart}>
          <div className="image-container">
            <img src={rollDice} alt={rollDice} className={`image ${animating ? 'image-roll' : ''}`} />
          </div>
        </div>
        <h3>Click on Dice to roll</h3>
        <OutlineButton onClick={resetScoreHandler}>Reset Score</OutlineButton>
        <Button onClick={toggleInstruction}>{show} Rules</Button>
      </GameLayoutWrapper>
    </Section>
  );
};

const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GameLayoutWrapper = styled.div`
  width: 250px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    text-align: center;
  }
  .image-container {
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease-out; /* Smooth transition */
}

.image-roll {
  animation: roll 1s ease-out;
}

@keyframes roll {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`;

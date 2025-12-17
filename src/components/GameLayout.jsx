import styled from "styled-components";
import Dice from 'react-dice-roll';


import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import { useState } from "react";

export const GameLayout = ({ GameStart, setShowInstruction, resetScoreHandler, selectedNumber, error }) => {
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
        <div className="dice-container" onClick={(e) => {
          if (!selectedNumber) {
            GameStart(); // Trigger validation
            e.stopPropagation(); // Prevent dice roll if invalid
          }
        }}>
          <Dice onRoll={GameStart} size={150} triggers={selectedNumber ? ['click'] : []} />
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
  .dice-container {
    margin-top: 48px;
  }


`;

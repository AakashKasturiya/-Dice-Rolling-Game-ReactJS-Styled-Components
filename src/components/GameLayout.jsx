import styled from "styled-components";
import { useState } from "react";
import Dice from "modern-react-dice-roll";
import dice1 from "../assets/dice_1.png";
import dice2 from "../assets/dice_2.png";
import dice3 from "../assets/dice_3.png";
import dice4 from "../assets/dice_4.png";
import dice5 from "../assets/dice_5.png";
import dice6 from "../assets/dice_6.png";

import { Button, OutlineButton } from "../styled/Button";

export const GameLayout = ({
  GameStart,
  setShowInstruction,
  resetScoreHandler,
  selectedNumber,
}) => {
  const [show, setShow] = useState("Show");
  const [isInstructionVisible, setIsInstructionVisible] = useState(false);

  const toggleInstruction = () => {
    setIsInstructionVisible((prev) => !prev);
    setShow(isInstructionVisible ? "Show" : "Hide");
    setShowInstruction(!isInstructionVisible);
  };

  return (
    <Section>
      <GameLayoutWrapper>
        <div className="dice-container" style={{ position: 'relative', display: 'inline-block' }}>
          {!selectedNumber && (
            <div
              onClick={() => GameStart()}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 10,
                cursor: 'pointer'
              }}
            />
          )}
          <Dice
            onRoll={(value) => GameStart(value)}
            size={200}
            disabled={!selectedNumber}
            faces={[dice1, dice2, dice3, dice4, dice5, dice6]}
          />
        </div>

        <h3 className="text-center text-lg click-on-dice">Click on Dice to roll</h3>
        <OutlineButton onClick={resetScoreHandler}>
          Reset Score
        </OutlineButton>

        <Button onClick={toggleInstruction}>{show} Rules</Button>
      </GameLayoutWrapper>
    </Section>
  );
};

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GameLayoutWrapper = styled.div`
  width: 260px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

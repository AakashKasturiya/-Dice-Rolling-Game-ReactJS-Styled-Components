import React from "react";
import styled from "styled-components";

export const Instruction = () => {
  const instruction = [
    "Select any number",
    "Click on dice image",
    "after click on  dice  if selected number is equal to dice number you will get same point as dice ",
    "if you get wrong guess then  2 point will be dedcuted",
  ];
  return (
    <Section> 
    <InstructionBox>
      <h2>How to play dice game</h2>
      <ul>
      {instruction.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
      </ul>
    </InstructionBox>
    </Section>
  );
};

const Section = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const InstructionBox = styled.div`
  width: 70%;
  padding: 20px;
  background-color: #fbf1f1;

  h2 {
    font-size: 24px;
    line-height: 36px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  p {
    font-size: 1rem;
    color: #000000;
    margin-bottom: 4px;
  }
`;

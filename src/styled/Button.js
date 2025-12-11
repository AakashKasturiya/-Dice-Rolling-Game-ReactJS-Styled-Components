import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover {
    opacity: 0.8;
    border: 1px solid black;
  
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: green;
  color: white;
  &:hover {
    border: 1px solid transparent;
    color: white;
  }
`;
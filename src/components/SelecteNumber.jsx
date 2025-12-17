import styled from "styled-components";

export const SelecteNumber = ({
  selectedNumber,
  setSelectedNumber,
  setError,
  error
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError(false);
  };
  return (
    <SelectNumberPage>
      <BoxWrapper>
        {arrNumber.map((value, index) => (
          <Box
            key={index}
            $isSelected={value === selectedNumber}
            $error={error}
            onClick={() => numberSelectorHandler(value)}>
            {value}
          </Box>
        ))}
      </BoxWrapper>
      {error ? (
        <p className="error-input">{error}</p>
      ) : (
        <p>Select Number</p>
      )}

    </SelectNumberPage>
  );
};

const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const Box = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => (props.$error ? "red" : "#000000")};
  font-size: 24px;
  line-height: 36px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${(props) => (props.$isSelected ? "black" : "white")};
  color: ${(props) => (props.$isSelected ? "white" : (props.$error ? "red" : "black"))};

  &:hover {
    background-color: ${(props) => (props.$isSelected ? "black" : "black")};
    color: white;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
`;


const SelectNumberPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    text-align: right;
    margin-top: 10px;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 18px;
    }
  }
  .error-input {
    font-size: 24px;
    font-weight: 500;
    text-align: right;
    color: #ff0c0c;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 18px;
    }
  }
`;

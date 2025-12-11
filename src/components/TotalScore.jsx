import styled from "styled-components";

export const TotalScore = ({ score }) => {
  return (
    <Score>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Score>
  )
}

const Score = styled.div`
    width: 200px;
    text-align: center;
    h1{
       font-size: 70px;
       font-weight: 500;
       line-height: 80px;
       margin: 0;
    }
    p{
        font-size: 24px;
        line-height: 36px;
        font-weight: 500;
        margin: 0;
    }

    @media (max-width: 768px) {
        width: 100%;
        h1 {
            font-size: 48px;
            line-height: 60px;
        }
        p {
            font-size: 18px;
            line-height: 24px;
        }
    }
`
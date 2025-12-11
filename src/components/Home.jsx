import styled from "styled-components";
import { Button } from "../styled/Button";
import Poster from "../assets/dices1.png";

const Home = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src={Poster} />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 20px;
  }

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;

      @media (max-width: 768px) {
        font-size: 48px;
        white-space: normal;
      }
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default Home;

import styled from 'styled-components';

const Card = () => {
  return (
    <Wrapper>
      <Greetings>
        <span>Hello! </span>I am
        <h2>
          Kemmei <span>Hamada.</span>
        </h2>
      </Greetings>

      <Title>
        <h3>Freelance Web Developer/Programmer</h3>
      </Title>

      <Description>I create awesome apps!</Description>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  width: 31rem;
  height: 20rem;
  padding: 1rem;
  border-radius: 20px;

  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 20px rgba(50, 50, 50, 0.5);
`;

const Title = styled.div`
  h3 {
    /* margin-left: 3em; */
    font-size: 1.5rem;
    text-align: center;
    color: darkgreen;
    /* color: #fff; */
  }
`;

const Greetings = styled.div`
  font-size: 1.75rem;

  span {
    font-size: 2rem;
    color: darkblue;
    /* color: rgb(50, 50, 50); */
  }

  h2 {
    /* margin-left: 2rem; */
    text-align: center;
    color: purple;
    font-size: 2.5rem;
    font-weight: 600;

    span {
      color: black;
      font-size: 1.5rem;
    }
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: darkgoldenrod;
`;

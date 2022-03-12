import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = () => {
  return (
    <Wrapper>
      <Greetings>
        <p>Hello! I am</p>
        <h1>
          Kemmei <span>Hamada.</span>
        </h1>
      </Greetings>
      {/* <motion.div */}
      {/*   initial={{ x: 300 }} */}
      {/*   animate={{ x: 0 }} */}
      {/*   transition={{ duration: 0.5 }} */}
      {/* > */}
      <Title>
        <h3>Freelance Web Developer/Programmer.</h3>
      </Title>
      {/* </motion.div> */}

      {/* <motion.div */}
      {/*   initial={{ y: 0, opacity: 0 }} */}
      {/*   animate={{ y: 0, opacity: 1 }} */}
      {/*   transition={{ duration: 1.0 }} */}
      {/* > */}
      <Description>
        <p>I create awesome apps!</p>
      </Description>
      {/* </motion.div> */}

      <Welcome>
        <h2>Wellcome to my portofolio.</h2>
      </Welcome>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div``;
const Title = styled.div`
  h3 {
    margin-left: 3em;
    color: #fff;
  }
`;

const Greetings = styled.div`
  h2 {
    /* color: #e9e9e9; */
    /* font-size: 1.1rem; */
    /* font-weight: 600; */
  }

  h1 {
    margin-left: 2rem;
    color: #7df9ff;
    span {
      color: #fff;
      font-size: small;
    }
  }
`;

const Description = styled.div`
  font-size: 1.1rem;

  p:nth-child(1) {
    color: #ffb6c1;
    font-weight: 700;
    margin-left: 2rem;
    font-size: 1.2rem;
  }

  p:nth-child(2) {
    color: pink;
    color: #f1e5ac;
    margin-top: 2rem;
    margin-left: 3rem;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

const Welcome = styled.div``;

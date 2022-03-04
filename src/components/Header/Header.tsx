import { motion } from "framer-motion";
import styled from "styled-components";
import { AppWrapper } from "../../wrapper";

const Header = () => {
  return (
    <Wrapper>
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Greetings>
          <p>Hello! I am</p>
          <h1>Kemmei <span>Hamada.</span></h1>
        </Greetings>
      </motion.div>

      <motion.div
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>
          <h3>Freelance Web Developer/Programmer.</h3>
        </Title>
      </motion.div>

      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0 }}
      >
        <Description>
          <p>I create awesome apps!</p>
        </Description>
      </motion.div>

      <Welcome>
        <h2>Wellcome to my portofolio.</h2>
      </Welcome>
    </Wrapper>
  )
}

export default AppWrapper(Header, 'home')

const Wrapper = styled.div`
  height: 400px;
  font-family: 'M PLUS Rounded 1c';
  margin-top: 3rem;
  padding: 3rem 3rem;

  background-color: rgba(173, 216, 230, 1.0);

  background-image: radial-gradient(
    rgba(0, 0, 139, 1.0),
    rgba(11, 11, 69, 1.0),
    rgba(11, 11, 69, 1.0)
  );
  /* background-image: linear-gradient( */
  /*   rgba(0, 0, 139, 0.5),  */
  /*   rgba(11, 11, 69, 1.0),  */
  /*   rgba(0, 0, 139, 0.7) */
  /* ); */

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Greetings = styled.div`
  p {
    color: #e9e9e9;
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  h1 {
    margin-left: 2rem;
    color: #7df9ff;
    span {
      color: #fff;
      font-size: small;
    }
  }
`

const Title = styled.div`
  h3 {
    margin-left: 3em;
    color: #fff;
  }
`

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
`

const Welcome = styled.div`
`


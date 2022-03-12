import { motion } from 'framer-motion';
import styled from 'styled-components';
import { AppWrapper } from '../../wrapper';
import Card from './Card/Card';

const Header = () => {
  return (
    <motion.div
      whileInView={{ scale: [0.95, 1.05, 1], opacity: [0, 1] }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <Wrapper>
        <Welcome>
          Wellcome to{' '}
          <span>
            <span>KH&apos; </span>
            Portofolio
          </span>
        </Welcome>

        <div>
          I&apos;m <span>Kemmei</span> Hamada
        </div>

        <Title>
          Freelance <span>Programmer</span>/<span>Web Developer</span>
        </Title>

        <Description>I create Awesome Apps!</Description>
      </Wrapper>
      {/* <Card /> */}
    </motion.div>
  );
};

export default AppWrapper(Header, 'home', 'white');

const Wrapper = styled.div`
  font-size: 1rem;
  font-family: 'M PLUS Rounded 1c';
  margin-top: 3em;
  /* padding: 3em 3em; */

  @media screen and (max-width: 750px) {
    font-size: 0.75rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
  }

  /* background-image: radial-gradient( */
  /*   rgba(0, 0, 139, 1), */
  /*   rgba(11, 11, 69, 1), */
  /*   rgba(11, 11, 69, 1) */
  /* ); */
  /* background-image: linear-gradient( */
  /*   rgba(0, 0, 139, 0.5),  */
  /*   rgba(11, 11, 69, 1.0),  */
  /*   rgba(0, 0, 139, 0.7) */
  /* ); */

  /* height: 100vh; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    font-size: 1.75em;
    font-weight: 600;

    span {
      font-size: 1.75em;
      color: darkblue;
    }
  }
`;

const Welcome = styled.h1`
  text-align: center;

  span {
    font-family: 'Alex Brush';
    font-size: 1.5em;

    span {
      color: darkblue;
    }
  }
`;

const Title = styled.div`
  font-size: 1.5em;
  font-weight: 600;

  span:first-child {
    font-size: 1.25em;
    color: green;
  }

  span:nth-child(2) {
    font-size: 1.25em;
    color: orangered;
  }
`;

const Description = styled.div`
  margin-top: 1em;
  font-size: 1.75em;
  font-style: italic;
  color: darkgoldenrod;
`;

import { motion } from 'framer-motion';
import styled from 'styled-components';
import { AppWrapper } from '../../wrapper';
import Card from './Card/Card';

const images = [
  {
    url: '/images/react-original_nocolor.svg',
    top: '0%',
    left: '10%',
  },
  {
    url: '/images/redux-original_nocolor.svg',
    top: '20%',
    left: '50%',
  },
  {
    url: '/images/firebase-plain_nocolor.svg',
    top: '60%',
    left: '30%',
  },
];

const Header = () => {
  return (
    <motion.div
      whileInView={{ scale: [0.95, 1.05, 1], opacity: [0, 0.5, 1] }}
      // animate={{ scale: [0.95, 1.05, 1], opacity: [0, 0.5, 1] }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
    >
      <Wrapper>
        <motion.div
          whileInView={{ scale: [0.95, 1.05, 1], opacity: [0, 0.5, 1] }}
          // animate={{ scale: [0.95, 1.05, 1], opacity: [0, 0.5, 1] }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delayChildren: 1,
            staggerChildren: 1,
          }}
        >
          {images.map((image, i) => (
            <motion.div
              // whileInView={{ scale: [0.95, 1.05, 1], opacity: [0, 0.5, 1] }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, ease: 'easeInOut' }}
            >
              <BackgroundIcon
                key={`bgicon-${i}`}
                src={image.url}
                alt='tool-logo'
                top={image.top}
                left={image.left}
              />
            </motion.div>
          ))}
        </motion.div>

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
    </motion.div>
  );
};

export default AppWrapper(Header, 'home', 'rgba(144,238,144,0.25)');

const Wrapper = styled.div`
  font-size: 1rem;
  font-family: 'M PLUS Rounded 1c';
  /* padding: 3em 3em; */
  z-index: 2;
  position: relative;

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
  z-index: 2;

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
  z-index: 2;

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
  z-index: 2;
`;

const BackgroundIcons = styled.div`
  /* height: 500px; */
  /* background-color: lightgoldenrodyellow; */
  /* position: relative; */
  /* display: grid; */
  /* justify-items: center; */
  /* align-items: center; */
`;

const BackgroundIcon = styled.img<{ top: string; left: string }>`
  /* display: inline-grid; */
  /* grid-column-start: 1; */
  /* grid-row-start: 1; */

  height: 40%;
  width: 40%;
  z-index: 2;
  opacity: 0.15;

  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

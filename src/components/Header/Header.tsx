import { motion } from 'framer-motion';
import styled from 'styled-components';
import { AppWrapper } from '../../wrapper';

const images = [
  {
    url: '/images/react-original_nocolor.svg',
    top: '0%',
    left: '5%',
  },
  {
    url: '/images/redux-original_nocolor.svg',
    top: '25%',
    left: '45%',
  },
  {
    url: '/images/firebase-plain_nocolor.svg',
    top: '65%',
    left: '25%',
  },
];

const Header = () => {
  return (
    <motion.div
      whileInView={{ scale: [0.95, 1], opacity: [0, 0.5, 1] }}
      // animate={{ scale: [0.95, 1.05, 1], opacity: [0, 0.5, 1] }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
    >
      <Wrapper>
        {images.map((image, i) => (
          <motion.div
            animate={{ scale: [0.95, 1.05, 1], opacity: [0, 0.5, 1] }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
          >
            <BackgroundIcon
              key={`bgicon-${i}`}
              src={image.url}
              alt={image.url}
              top={image.top}
              left={image.left}
            />
          </motion.div>
        ))}

        <Card>
          <Welcome>
            Wellcome to{' '}
            <span>
              <span>KH&apos; </span>
              Portofolio
            </span>
          </Welcome>

          <Intro>
            I&apos;m <span>Kemmei</span> Hamada
          </Intro>

          <Title>
            Freelance &nbsp; <span>Programmer</span>/<span>Web Developer</span>
          </Title>

          <Description>I create Awesome Apps!</Description>
        </Card>
      </Wrapper>
    </motion.div>
  );
};

// const bgColor = 'rgba(144,238,144,0.25)';
const bgColor = 'rgba(211,211,211,0.9)';

export default AppWrapper(Header, 'home', bgColor);

const Wrapper = styled.div`
  position: relative;
`;

const Card = styled.div`
  font-size: 1rem;
  font-family: 'M PLUS Rounded 1c';

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 750px) {
    font-size: 0.75rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
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

const Intro = styled.div`
  margin-top: 1em;
  font-size: 1.75em;
  font-weight: 600;

  span {
    margin-left: 0.25em;
    font-size: 1.75em;
    color: darkblue;
  }
`;

const Title = styled.div`
  margin-top: 0.75em;
  font-size: 1.75em;
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
  margin-top: 1.5em;
  font-size: 1.75em;
  font-style: italic;
  color: darkgoldenrod;
  z-index: 2;
`;

const BackgroundIcon = styled.img<{ top: string; left: string }>`
  /* display: inline-grid; */
  /* grid-column-start: 1; */
  /* grid-row-start: 1; */

  height: 50%;
  width: 50%;
  z-index: 1;
  opacity: 0.05;

  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

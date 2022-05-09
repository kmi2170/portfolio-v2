import { motion } from 'framer-motion';
import { AppWrapper } from '../../wrapper';
import {
  Wrapper,
  Card,
  Title,
  Welcome,
  About,
  Intro,
  Description,
  BackgroundIcon,
} from './styles';

const images = [
  {
    url: '/images/react-original_nocolor.svg',
    top: '10%',
    left: '15%',
  },
  {
    url: '/images/typescript-original_nocolor.svg',
    top: '65%',
    left: '55%',
  },
  {
    url: '/images/redux-original_nocolor.svg',
    top: '70%',
    left: '25%',
  },
  {
    url: '/images/nextjs-original.svg',
    top: '10%',
    left: '45%',
  },
  // {
  //   url: '/images/firebase-plain_nocolor.svg',
  //   top: '65%',
  //   left: '25%',
  // },
];

const Header = () => {
  return (
    <Wrapper>
      {images.map((image, i) => (
        <BackgroundIcon
          key={`bgicon-${i}`}
          src={image.url}
          alt={image.url}
          top={image.top}
          left={image.left}
        />
      ))}

      <Card>
        <Title>
          <motion.div
            whileInView={{ x: [-50, 0] }}
            transition={{ duration: 0.75, delay: 0.25, ease: 'easeInOut' }}
          >
            <span>KH&apos;s</span>&nbsp; Portofolio
          </motion.div>
        </Title>

        <Intro>
          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: [50, -150] }}
            transition={{ duration: 0.75, delay: 1, ease: 'easeInOut' }}
          >
            I&apos;m <span>Kemmei</span> Hamada
          </motion.div>
        </Intro>

        <About>
          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: [50, -50] }}
            transition={{ duration: 0.75, delay: 1.25, ease: 'easeInOut' }}
          >
            Freelance &nbsp; <span>Programmer</span>/<span>Web Developer</span>
          </motion.div>
        </About>

        {/* <Description>I create Awesome Apps!</Description> */}

        <Welcome>
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: [50, 0] }}
            transition={{ duration: 0.75, delay: 1.5, ease: 'easeInOut' }}
          >
            Wellcome to My Portfolio
          </motion.div>
        </Welcome>
      </Card>
    </Wrapper>
  );
};

// const bgColor = 'rgba(144,238,144,0.25)';
// const bgColor = 'rgba(211,211,211,0.6)';

export default AppWrapper(Header, 'home');

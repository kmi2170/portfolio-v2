import { motion } from 'framer-motion';
import { AppWrapper } from '../../wrapper';
import {
  Wrapper,
  Card,
  Welcome,
  Title,
  Intro,
  Description,
  BackgroundIcon,
} from './styles';

const images = [
  {
    url: '/images/react-original_nocolor.svg',
    top: '0%',
    left: '5%',
  },
  {
    url: '/images/firebase-plain_nocolor.svg',
    top: '65%',
    left: '25%',
  },
  {
    url: '/images/redux-original_nocolor.svg',
    top: '25%',
    left: '45%',
  },
  // {
  //   url: '/images/typescript-original.svg',
  //   top: '75%',
  //   left: '0%',
  // },
];

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 0.5, 1] }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
    >
      <Wrapper>
        {images.map((image, i) => (
          <>
            {/* <motion.div */}
            {/*   key={`bgicon-${i}`} */}
            {/*   animate={{ scale: [0.95, 1.05, 1], opacity: [0, 0.5, 1] }} */}
            {/*   transition={{ */}
            {/*     duration: 1, */}
            {/*     ease: 'easeInOut', */}
            {/*   }} */}
            {/* > */}
            <BackgroundIcon
              // key={`bgicon-${i}`}
              src={image.url}
              alt={image.url}
              top={image.top}
              left={image.left}
            />
            {/* </motion.div> */}
          </>
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
const bgColor = 'rgba(211,211,211,0.6)';

export default AppWrapper(Header, 'home', bgColor);

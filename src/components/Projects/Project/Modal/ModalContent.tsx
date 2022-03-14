import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  AiFillCloseCircle,
  AiFillCheckCircle,
  AiOutlineCheck,
  AiFillGithub,
} from 'react-icons/ai/index';
import { GiSmartphone } from 'react-icons/gi/index';

import { DataProject, Lang } from '../../../../lib/types';
import Carousel from './Carousel/Carousel';

interface ModalContentProps {
  project: DataProject;
  closeModal: () => void;
  lang: Lang;
}

const ModalContent = ({ project, closeModal, lang }: ModalContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1.0, ease: 'easeInOut' }}
    >
      <Wrapper>
        <ButtonContainer>
          <Close onClick={closeModal}>
            <AiFillCloseCircle />
          </Close>
        </ButtonContainer>
        <AppName>{project?.name[lang]}</AppName>

        <AppImg>
          <Carousel imageUrls={project?.imageUrls} />
          {/* <img src={project?.imageUrls[0]} alt={project?.name['en']} /> */}
        </AppImg>

        <Links>
          <a href={project?.url} target='_blank' rel='noopener noreferrer'>
            <GiSmartphone />
            App
          </a>
          <a href={project?.repo} target='_blank' rel='noopener noreferrer'>
            <AiFillGithub />
            Code
          </a>
        </Links>

        <Tags>
          {project?.tags.map((tag, i) => (
            <span key={tag + i}>{tag}</span>
          ))}
        </Tags>

        <Description>{project.description[lang]}</Description>

        <SubTitle>Features</SubTitle>
        <Features>
          {project?.features[lang].map((feature, i) => (
            <li key={i}>
              <AiOutlineCheck />
              {feature}
            </li>
          ))}
        </Features>

        <SubTitle>Details</SubTitle>
        <Details>
          {project?.details[lang].map((detail, i) => (
            <li key={i}>
              <AiFillCheckCircle />
              {detail}
            </li>
          ))}
        </Details>
      </Wrapper>
    </motion.div>
  );
};

export default ModalContent;

const Wrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(108, 122, 137, 1);
  padding: 0 0.5rem 0.5rem 0.5rem;
  width: 85vw;
  height: 85vh;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  font-family: 'M PLUS Rounded 1c';

  &:hover {
    box-shadow: 0 0 20px rgba(108, 122, 137, 1);
  }
`;

const AppName = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  text-align: right;
`;

const Close = styled.span`
  svg {
    width: 35px;
    height: 35px;
    color: blue;

    &:hover {
      cursor: pointer;
    }
  }
`;

const AppImg = styled.div`
  width: 50%;
  /* height: 200px; */
  /* object-fit: cover; */
  cursor: pointer;
  position: relative;

  img {
    width: 100%;

    &:hover {
      scale: 0.9;
      --webkit-filter: brightness(70%);
    }
  }
`;

const Links = styled.div`
  width: 90%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  a {
    color: blue;

    display: flex;
    align-items: center;

    svg {
      font-size: 1.25rem;
      margin-right: 0.2rem;
    }
  }
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;

  span {
    font-size: 1.25rem;
    padding: 0 0.5rem;
    color: white;
    background-color: #4b365f;
    border-radius: 10px;
  }
`;

const Description = styled.div`
  margin: 1rem 0;
  width: 80%;
  font-size: 1.25rem;
  text-align: center;
`;

const Features = styled.ul`
  font-size: 1.25rem;

  li {
    list-style: none;
    overflow-wrap: normal;
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.blue};
    margin-left: 0.5rem;
  }
`;

const Details = styled.ul`
  font-size: 1.25rem;

  li {
    list-style: none;
    overflow-wrap: normal;
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.green};
    margin-right: 0.25rem;
  }
`;

const SubTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`;

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
import {
  Wrapper,
  ButtonContainer,
  Close,
  AppName,
  AppImg,
  Links,
  Tags,
  Description,
  SubTitle,
  Features,
  Details,
} from './styles';

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
        </AppImg>

        <Links>
          {project?.url ? (
            <a href={project?.url} target="_blank" rel="noopener noreferrer">
              <GiSmartphone />
              App
            </a>
          ) : (
            <div></div>
          )}
          <a href={project?.repo} target="_blank" rel="noopener noreferrer">
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

        {project?.details[lang].length > 0 && (
          <>
            <SubTitle>Details</SubTitle>
            <Details>
              {project?.details[lang].map((detail, i) => (
                <li key={i}>
                  <AiFillCheckCircle />
                  {detail}
                </li>
              ))}
            </Details>
          </>
        )}
      </Wrapper>
    </motion.div>
  );
};

export default ModalContent;

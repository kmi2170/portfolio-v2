import { useState } from 'react';
import { AiOutlineEye, AiFillGithub } from 'react-icons/ai/index';
import { GiSmartphone } from 'react-icons/gi/index';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

import { DataProject, Lang } from '../../../lib/types';
import ModalContent from './Modal/ModalContent';
import { Wrapper, AppName, AppImg, Hover, Tags, Links } from './styles';

Modal.setAppElement('#__next');

interface ProjectProps {
  project: DataProject;
  lang: Lang;
}

const customModalStyle = {
  content: {
    top: '10vh',
    left: '5vw',
    // top: '50%',
    // left: '50%',
    right: 'auto',
    bottom: 'auto',
    // transform: 'translate(-50% -50%)',
    backgroundColor: 'white',
    padding: 0,
    border: 'none',
    boxShadow: '0 0 10px white',
    // width: '85vw',
    // height: '90vh',
    // overflow: 'auto',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)',
  },
};

const Project = ({ project, lang }: ProjectProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <Wrapper>
      <AppName>{project?.name[lang]}</AppName>

      <AppImg>
        <img src={project?.imageUrls[0]} alt={project?.name[lang]} />
        <Hover onClick={openModal}>
          <motion.div
            whileHover={{ opacity: [0, 1], scale: 1.5 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
          >
            <AiOutlineEye />
            <span>Clic to View</span>
          </motion.div>
        </Hover>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={customModalStyle}
        >
          <ModalContent project={project} closeModal={closeModal} lang={lang} />
        </Modal>
      </AppImg>

      <Tags>
        {project?.tags.map((tag, i) => (
          <span key={tag + i}>{tag}</span>
        ))}
      </Tags>

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
    </Wrapper>
  );
};

export default Project;

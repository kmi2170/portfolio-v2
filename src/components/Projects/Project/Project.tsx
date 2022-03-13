import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineEye, AiFillGithub } from 'react-icons/ai/index';
import { GiSmartphone } from 'react-icons/gi/index';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

import { DataProject, Lang } from '../../../lib/types';
import ModalContent from './Modal/ModalContent';

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

const Wrapper = styled.div`
  width: 300px;
  height: 350px;
  background: whitesmoke;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(108, 122, 137, 1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &:hover {
    box-shadow: 0 0 30px rgba(108, 122, 137, 1);
  }
`;

const AppName = styled.div`
  margin-top: 0.25rem;
  font-size: 1.5rem;
`;

const AppImg = styled.div`
  width: 100%;
  height: 200px;
  /* object-fit: cover; */
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
  }
`;

const Hover = styled.div`
  width: 100%;
  height: 190px;
  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;

  div {
    color: rgba(255, 255, 255, 0.8);

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      font-size: 1rem;
      /* text-align: center; */
    }

    svg {
      width: 20%;
      height: 20%;
    }
  }

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
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
    padding: 0 0.5rem;
    color: white;
    background-color: #4b365f;
    border-radius: 10px;
  }
`;

const Links = styled.div`
  width: 90%;
  padding: 0.25rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

import styled from 'styled-components';
import { AiFillEye, AiOutlineEye } from 'react-icons/ai/index';

import { DataProject } from '../../../lib/types';
import Modal from 'react-modal';
import { useState } from 'react';
import ModalContent from './Modal/ModalContent';

const customModalStyle = {
  content: {
    top: '10vh',
    left: '5vw',
    right: '5vw',
    bottom: '5vh',
    // transform: 'translate(-50% -50%)',
    backgroundColor: '#0a0b0d',
    padding: 0,
    border: 'none',
    boxShadow: '0 0 10px white',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)',
  },
};

const Project = ({ project }: { project: DataProject }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      <AppName>{project?.name['jp']}</AppName>

      <AppImg>
        <img src={project?.imageUrls[0]} alt={project?.name['en']} />

        <div>{project.tags}</div>

        <Hover onClick={() => handleClick()}>
          <AiOutlineEye />
          <span>Click to View</span>
          <Modal isOpen={isModalOpen} style={customModalStyle}>
            <ModalContent project={project} />
          </Modal>
        </Hover>
      </AppImg>

      <Links>
        <a href={project?.url} target='_blank' rel='noopener noreferrer'>
          App
        </a>
        <a href={project?.repo} target='_blank' rel='noopener noreferrer'>
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
    box-shadow: 0 0 20px rgba(108, 122, 137, 1);
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

    &:hover {
      scale: 0.9;
      --webkit-filter: brightness(70%);
    }
  }
`;

const Hover = styled.div`
  width: 100%;
  height: 190px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 2s ease;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 1.5rem;
    color: white;
    text-align: center;
  }

  svg {
    color: white;
    width: 30%;
    height: 30%;
  }

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Links = styled.div`
  width: 90%;
  padding: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    color: blue;
  }
`;

import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai/index';
// import { motion } from 'framer-motion';
// import { client, urlFor } from '../../lib/sanity';

import { AppWrapper, MotionWrapper } from '../../wrapper';
import Project from './Project/Project';
import { DataProject } from '../../lib/types';

const Projects = ({ projects }: { projects: DataProject[] }) => {
  return (
    <Wrapper>
      <Title>
        My <span>Next.js</span> Projects
      </Title>

      <Git>
        Github
        <a
          href='https://github.com/kmi2170'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span>
            <AiFillGithub />
          </span>
        </a>
      </Git>

      <Container>
        {projects?.map((project: DataProject) => (
          <Project key={project.name.en} project={project} />
        ))}
      </Container>

      <Description>
        This site is built with Next.js, styled-componets, Sanity (CMS) and
        Framer Motion (animation).
      </Description>
    </Wrapper>
  );
};

export default AppWrapper(MotionWrapper(Projects), 'projects');

const Wrapper = styled.div`
  padding: 1.5rem;
  padding-left: 2rem;
  font-family: 'M PLUS Rounded 1c';
  /* width: 100vw; */
  /* height: 100vh; */
`;

const Title = styled.h2`
  span {
    color: rgb(0, 0, 139);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Git = styled.div`
  text-align: left;
  font-size: 1.25rem;
  margin: 10px;
  margin-left: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    margin-left: 0.5rem;
    font-size: 2rem;
  }
`;

const Description = styled.p`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.25rem;
`;

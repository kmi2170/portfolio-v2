import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai/index';
import { motion } from 'framer-motion';
// import { client, urlFor } from '../../lib/sanity';

import { AppWrapper, MotionWrapper } from '../../wrapper';
import Project from './Project/Project';
import { DataProject, Lang } from '../../lib/types';

interface ProjectsProps {
  projects: DataProject[];
  lang: Lang;
}

const Projects = ({ projects, lang }: ProjectsProps) => {
  return (
    <Wrapper>
      <Title>
        My <span>Next.js</span> Projects
      </Title>

      <Git>
        My
        <a
          href='https://github.com/kmi2170'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
          <AiFillGithub />
        </a>
      </Git>

      <Container>
        {projects?.map((project: DataProject) => (
          <motion.div
            key={project.name.en}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1.25, ease: 'easeInOut' }}
          >
            <Project key={project.name.en} project={project} lang={lang} />
          </motion.div>
        ))}
      </Container>

      <Description>
        This site is built with
        <span>
          {[
            'Next.js',
            'styled-components',
            'SANITY (CMS)',
            'Framer Motion (animaton)',
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </span>
      </Description>
    </Wrapper>
  );
};

export default AppWrapper(MotionWrapper(Projects), 'projects');

const Wrapper = styled.div`
  padding: 1.5rem;
  padding-left: 2rem;
  font-family: 'M PLUS Rounded 1c';
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
  gap: 2rem;
`;

const Git = styled.div`
  text-align: left;
  font-size: 1.25rem;
  margin: 10px;
  margin-left: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: blue;

    svg {
      margin-left: 0.25rem;
      font-size: 1.75rem;
    }
  }
`;

const Description = styled.p`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.25rem;

  span {
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
  }
`;

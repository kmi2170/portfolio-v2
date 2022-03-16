import { AiFillGithub } from 'react-icons/ai/index';
import { isValidMotionProp, motion } from 'framer-motion';
// import { client, urlFor } from '../../lib/sanity';

import { AppWrapper, MotionWrapper } from '../../wrapper';
import Project from './Project/Project';
import { DataProject, Lang } from '../../lib/types';
import { Wrapper, Title, Git, Container, Description } from './styles';

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
            transition={{ duration: 1, ease: 'easeInOut' }}
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
            'Framer Motion (animation)',
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </span>
      </Description>
    </Wrapper>
  );
};

export default AppWrapper(MotionWrapper(Projects), 'projects');

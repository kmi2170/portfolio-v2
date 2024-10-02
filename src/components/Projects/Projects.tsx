import React from "react";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai/index";
import { isValidMotionProp, motion } from "framer-motion";
// import { client, urlFor } from '../../lib/sanity';

import { AppWrapper, MotionWrapper } from "../../wrapper";
import Project from "./Project/Project";
import { DataProject, Lang } from "../../lib/types";
import {
  Wrapper,
  Title,
  Git,
  Container,
  Description,
  SelectTags,
  Tag,
} from "./styles";

interface ProjectsProps {
  projects: DataProject[];
  lang: Lang;
}

const Projects = ({ projects, lang }: ProjectsProps) => {
  const collectedTags = projects?.map(({ tags }) => tags);
  const setTags = new Set(collectedTags.flat());
  const tags = Array.from(setTags);

  const [selectedTag, setSelectedTag] = useState<string>("all");

  const filteredProjects =
    selectedTag === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  return (
    <Wrapper>
      <Title>
        My <span>React/Next.js</span> Projects
      </Title>

      <Git>
        My
        <a
          href="https://github.com/kmi2170"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
          <AiFillGithub />
        </a>
      </Git>

      <SelectTags>
        <span>
          <Tag
            key={"all"}
            isSelected={"all" === selectedTag}
            onClick={() => setSelectedTag("all")}
          >
            All
          </Tag>
          {tags.map((tag) => (
            <Tag
              key={tag}
              isSelected={tag === selectedTag}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Tag>
          ))}
        </span>
      </SelectTags>

      <Container>
        {filteredProjects?.map((project: DataProject) => (
          <motion.div
            key={project.name.en}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Project key={project.name.en} project={project} lang={lang} />
          </motion.div>
        ))}
      </Container>

      <Description>
        This site is built with
        <span>
          {[
            "Next.js",
            "styled-components",
            "SANITY (CMS)",
            "Framer Motion (animation)",
          ].map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </span>
      </Description>
    </Wrapper>
  );
};

export default React.memo(Projects);
// export default React.memo(AppWrapper(MotionWrapper(Projects), "projects"));

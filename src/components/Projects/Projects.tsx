import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import Project from "./Project/Project";
import { DataProject, Lang } from "../../lib/types";
import { Wrapper, Git, Container, Description } from "./styles";
import { GithubIcon } from "../../assets/icons";
import { MotionWrapper } from "../../wrapper";
import { theme } from "../../styles/globalStyles";
import { Tag, Tags, Text } from "../common";

interface ProjectsProps {
  projects: DataProject[];
  lang: Lang;
}

const Projects = ({ projects, lang }: ProjectsProps) => {
  const collectedTags = projects?.map(({ tags }) => tags);
  const setTags = new Set(collectedTags.flat());
  const tags = Array.from(setTags);
  const blue = theme.colors.blue;

  const [selectedTag, setSelectedTag] = useState<string>("all");

  const filteredProjects =
    selectedTag === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  return (
    <Wrapper id="projects">
      <Text secondary={blue}>
        My <span>React/Next.js</span> Projects
      </Text>

      <Git>
        <a
          href="https://github.com/kmi2170"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon size={50} />
        </a>
      </Git>

      <Tags marginTop="1rem" marginBottom="2rem">
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
      </Tags>

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
        <p>This site is built with</p>
        <Tags marginTop="1rem">
          {[
            "Next.js",
            "styled-components",
            "SANITY (CMS)",
            "Framer Motion (animation)",
          ].map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </Description>
    </Wrapper>
  );
};

export default React.memo(MotionWrapper(Projects));

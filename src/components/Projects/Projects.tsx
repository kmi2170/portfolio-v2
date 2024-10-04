import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

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
import { GithubIcon } from "../../assets/icons";
import { MotionWrapper } from "../../wrapper";

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
        <a
          href="https://github.com/kmi2170"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </Git>

      <SelectTags>
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

export default React.memo(MotionWrapper(Projects));

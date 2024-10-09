import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import Project from "./Project/Project";
import { DataProject, Lang } from "../../lib/types";
import { Git } from "./styles";
import { GithubIcon } from "../../assets/icons";
import { MotionWrapper } from "../../wrapper";
import { theme } from "../../styles/globalStyles";
import { ComponentWrapper, Container, Tag, Tags, Text } from "../common-styles";

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
    <ComponentWrapper id="projects" padding={1.5}>
      <Text as="h2" fontSize={1.5} fontWeight={600} secondary={blue}>
        My <span>React/Next.js</span> Projects
      </Text>

      <Git color={blue}>
        <a
          href="https://github.com/kmi2170"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github link"
        >
          <GithubIcon size={50} />
        </a>
      </Git>

      <Tags marginTop={1.5} marginBottom={1.5}>
        <Tag
          key={"all"}
          isSelected={"all" === selectedTag}
          clickable={true}
          onClick={() => setSelectedTag("all")}
        >
          All
        </Tag>
        {tags.map((tag) => (
          <Tag
            key={tag}
            isSelected={tag === selectedTag}
            clickable={true}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </Tag>
        ))}
      </Tags>

      <Container direction="row" justify="center" align="center" gap={0.75}>
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

      <Text as="p" fontSize={1.25} align="center" marginTop={2}>
        This app is built with
      </Text>

      <Tags marginTop={1} marginBottom={2}>
        {[
          "Next.js",
          "styled-components",
          "SANITY (CMS)",
          "Framer Motion (animation)",
        ].map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </ComponentWrapper>
  );
};

export default React.memo(MotionWrapper(Projects));

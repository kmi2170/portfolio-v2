import { useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

import { DataProject, Lang } from "../../../lib/types";
import Modal from "./Modal/Modal";
import { ProjectWrapper } from "./styles";
import { Tags, Tag, Text, Container } from "../../common-styles";
import Links from "../../templates/Links";
import { theme } from "../../../styles/globalStyles";

type ProjectProps = {
  project: DataProject;
  lang: Lang;
};

const Project = ({ project, lang }: ProjectProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const control1 = useAnimation();
  const control2 = useAnimation();

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const darkGray = theme.colors.darkGray;
  const blue = theme.colors.blue;

  return (
    <ProjectWrapper color={darkGray} colorOnHover={blue}>
      <Container
        direction="column"
        align="center"
        as={motion.div}
        onHoverStart={() => {
          control1.start({ y: -10 });
          control2.start({ y: 10 });
        }}
        onHoverEnd={() => {
          control1.start({ y: 0 });
          control2.start({ y: 0 });
        }}
        // whileHover={{ opacity: [1, 1], scale: 1.5 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        onClick={openModal}
      >
        <Text
          as={motion.h2}
          animate={control1}
          fontSize={1}
          marginTop={0.5}
          marginBottom={0.5}
          paddingLeft={0.5}
          paddingRight={0.5}
        >
          {project?.name[lang]}
        </Text>

        <motion.div animate={control2}>
          <Image
            src={project?.imageUrls[0]}
            width={350}
            height={200}
            alt={project?.name[lang]}
          />
        </motion.div>

        <Tags marginTop={1}>
          {project?.tags.map((tag, i) => (
            <Tag key={tag} fontSize={0.75}>
              {tag}
            </Tag>
          ))}
        </Tags>
      </Container>

      <Links project={project} marginTop={1.5} marginBottom={1} />

      {isModalOpen && (
        <Modal project={project} closeModal={closeModal} lang={lang} />
      )}
    </ProjectWrapper>
  );
};

export default Project;

import { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import { motion, useAnimation } from "framer-motion";

import { DataProject, Lang } from "../../../lib/types";
import ModalContent from "./Modal/ModalContent";
import { Wrapper } from "./styles";
import { Tags, Tag, Text, Container } from "../../common-styles";
import Links from "../../templates/Links";

Modal.setAppElement("#__next");
interface ProjectProps {
  project: DataProject;
  lang: Lang;
}

const customModalStyle = {
  content: {
    top: "10vh",
    left: "5vw",
    // top: '50%',
    // left: '50%',
    right: "auto",
    bottom: "auto",
    // transform: 'translate(-50% -50%)',
    backgroundColor: "white",
    padding: 0,
    border: "none",
    boxShadow: "0 0 10px white",
    // width: '85vw',
    // height: '90vh',
    // overflow: 'auto',
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.75)",
    zIndex: 30,
  },
};

const Project = ({ project, lang }: ProjectProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const control1 = useAnimation();
  const control2 = useAnimation();

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <Wrapper>
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
            <Tag key={tag} fontSize="0.75rem">
              {tag}
            </Tag>
          ))}
        </Tags>
      </Container>

      <Links project={project} marginTop={1.5} marginBottom={1} />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customModalStyle}
      >
        <ModalContent project={project} closeModal={closeModal} lang={lang} />
      </Modal>
    </Wrapper>
  );
};

export default Project;

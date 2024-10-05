import { motion } from "framer-motion";

import { DataProject, Lang } from "../../../../lib/types";
import Carousel from "./Carousel/Carousel";
import { Wrapper, Close, ProjectImg, Links, Features, Details } from "./styles";
import { AppIcon, CloseIcon, GithubIcon } from "../../../../assets/icons";
import { theme } from "../../../../styles/globalStyles";
import { Dot, Tag, Tags, Text } from "../../../common";

interface ModalContentProps {
  project: DataProject;
  closeModal: () => void;
  lang: Lang;
}

const ModalContent = ({ project, closeModal, lang }: ModalContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1.0, ease: "easeInOut" }}
    >
      <Wrapper>
        <Close onClick={closeModal}>
          <CloseIcon />
        </Close>

        <Text align="center" marginTop={1} marginBottom={2}>
          {project?.name[lang]}
        </Text>

        <ProjectImg>
          <Carousel imageUrls={project?.imageUrls} />
        </ProjectImg>

        <Links>
          {project?.url ? (
            <a href={project?.url} target="_blank" rel="noopener noreferrer">
              <AppIcon />
              App
            </a>
          ) : (
            <div></div>
          )}
          <a href={project?.repo} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            Code
          </a>
        </Links>

        <Tags marginTop={2} marginBottom={2}>
          {project?.tags.map((tag, i) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>

        <Text as="div" fontSize={1} marginBottom={1}>
          {project.description[lang]}
        </Text>

        <Text as="h3" fontSize={1.25}>
          Features
        </Text>

        <Features>
          {project?.features[lang].map((feature, i) => (
            <li key={i}>
              <Dot
                color={theme.colors.blue}
                size="1.5rem"
                marginRight="0.5rem"
              />
              {feature}
            </li>
          ))}
        </Features>

        {project?.details[lang].length > 0 && (
          <>
            <Text as="h3" fontSize={1.25}>
              Details
            </Text>

            <Details>
              {project?.details[lang].map((detail, i) => (
                <li key={i}>
                  <Dot
                    color={theme.colors.green}
                    size="1.5rem"
                    marginRight="0.5rem"
                  />
                  {detail}
                </li>
              ))}
            </Details>
          </>
        )}
      </Wrapper>
    </motion.div>
  );
};

export default ModalContent;

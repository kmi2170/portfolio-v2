import { motion } from "framer-motion";

import { DataProject, Lang } from "../../../../lib/types";
import Carousel from "./Carousel/Carousel";
import {
  Wrapper,
  Close,
  ProjectName,
  ProjectImg,
  Links,
  Description,
  SubTitle,
  Features,
  Details,
} from "./styles";
import { AppIcon, CloseIcon, GithubIcon } from "../../../../assets/icons";
import { theme } from "../../../../styles/globalStyles";
import { Dot } from "../../../common/dot";
import { Tags, Tag } from "../../../common/tag";

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

        <ProjectName>{project?.name[lang]}</ProjectName>

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

        <Tags>
          {project?.tags.map((tag, i) => (
            <Tag key={tag + i}>{tag}</Tag>
          ))}
        </Tags>

        <Description>{project.description[lang]}</Description>

        <SubTitle>Features</SubTitle>
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
            <SubTitle>Details</SubTitle>
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

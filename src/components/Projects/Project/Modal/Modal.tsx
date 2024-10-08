import { motion } from "framer-motion";

import { DataProject, Lang } from "../../../../lib/types";
import Carousel from "./Carousel/Carousel";
import {
  Close,
  ProjectImg,
  Features,
  Details,
  ModalWrapper,
  ModalOverlay,
} from "./styles";
import { CloseIcon } from "../../../../assets/icons";
import { theme } from "../../../../styles/globalStyles";
import { Container, Dot, Tag, Tags, Text } from "../../../common-styles";
import Links from "../../../templates/Links";

type ModalContentProps = {
  project: DataProject;
  closeModal: () => void;
  lang: Lang;
};

const Modal = ({ project, closeModal, lang }: ModalContentProps) => {
  return (
    <>
      <ModalOverlay onClick={closeModal} />

      <ModalWrapper>
        <Container
          as={motion.section}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          direction="column"
          justify="center"
          align="center"
        >
          <Close onClick={closeModal}>
            <CloseIcon />
          </Close>

          <Container
            direction="column"
            justify="center"
            align="center"
            maxWidth={900}
          >
            <Text
              as="h2"
              fontSize={1.25}
              align="center"
              marginTop={1}
              marginBottom={2}
            >
              {project?.name[lang]}
            </Text>

            <ProjectImg>
              <Carousel imageUrls={project?.imageUrls} />
            </ProjectImg>

            <Links project={project} />

            <Tags marginTop={2} marginBottom={3}>
              {project?.tags.map((tag, i) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>

            <Text as="p" align="center" fontSize={1} marginBottom={1}>
              {project.description[lang]}
            </Text>

            <Text
              as="h3"
              fontSize={1.25}
              align="center"
              marginTop={1.5}
              marginBottom={0.5}
            >
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
                <Text
                  as="h3"
                  fontSize={1.25}
                  align="center"
                  marginTop={1.5}
                  marginBottom={0.5}
                >
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
          </Container>
        </Container>
      </ModalWrapper>
    </>
  );
};

export default Modal;

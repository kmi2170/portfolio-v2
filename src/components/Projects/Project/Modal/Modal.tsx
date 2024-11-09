import { motion } from "framer-motion";

import { DataProject, Lang } from "../../../../lib/types";
import Carousel from "./Carousel/Carousel";
import {
  Close,
  ProjectImg,
  ModalWrapper,
  ModalOverlay,
  Li,
  Ul,
  ModalContentWrapper,
} from "./styles";
import { CloseIcon } from "../../../../assets/icons";
import { theme } from "../../../../styles/globalStyles";
import { Dot, Tag, Tags, Text } from "../../../common-styles";
import Links from "../../../templates/Links";

type ModalContentProps = {
  project: DataProject;
  closeModal: () => void;
  lang: Lang;
};

const Modal = ({ project, closeModal, lang }: ModalContentProps) => {
  const svgColor = theme.colors.blue;

  return (
    <>
      <ModalOverlay>
        <ModalWrapper
          as={motion.dialog}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
        >
          <ModalContentWrapper
            direction="column"
            justify="center"
            align="center"
            wrap="nowrap"
            // wrap={false}
          >
            <Close onClick={closeModal} svgColor={svgColor}>
              <CloseIcon />
            </Close>

            <Text
              as="h2"
              fontSize={1.25}
              fontWeight={600}
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

            {project?.features[lang] && (
              <>
                <Text
                  as="h3"
                  fontSize={1.25}
                  fontWeight={600}
                  align="center"
                  marginTop={1.5}
                  marginBottom={0.5}
                >
                  Features
                </Text>

                <Ul direction="column" justify="center" align="start">
                  {project?.features[lang].map((feature, i) => (
                    <Li key={i}>
                      <Dot
                        color={theme.colors.blue}
                        size="1.5rem"
                        marginRight="0.5rem"
                      />
                      <Text
                        as="p"
                        fontSize={1}
                        align="left"
                        marginBottom={0.25}
                      >
                        {feature}
                      </Text>
                    </Li>
                  ))}
                </Ul>
              </>
            )}

            {project?.details[lang].length > 0 && (
              <>
                <Text
                  as="h3"
                  fontSize={1.25}
                  fontWeight={600}
                  align="center"
                  marginTop={1.5}
                  marginBottom={0.5}
                >
                  Details
                </Text>

                <Ul direction="column" justify="center" align="start">
                  {project?.details[lang].map((detail, i) => (
                    <Li key={i}>
                      <Dot
                        color={theme.colors.green}
                        size="1.5rem"
                        marginRight="0.5rem"
                      />
                      <Text
                        as="p"
                        fontSize={1}
                        align="left"
                        marginBottom={0.25}
                      >
                        {detail}
                      </Text>
                    </Li>
                  ))}
                </Ul>
              </>
            )}
          </ModalContentWrapper>
        </ModalWrapper>
      </ModalOverlay>
    </>
  );
};

export default Modal;

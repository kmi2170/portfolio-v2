import React from "react";
import { motion, Variants } from "framer-motion";

import { Tools, Tool } from "./styles";
import { devtools } from "../../assets/devtools";
import { theme } from "../../styles/globalStyles";
import { MotionWrapper } from "../../wrapper";
import { ComponentWrapper, Container, Dot, Text } from "../common-styles";

const devtool_colors = {
  main: theme.colors.blue,
  ui: theme.colors.red,
  backend: theme.colors.green,
  others: theme.colors.darkGray,
};
type DevtoolColors = keyof typeof devtool_colors;

const dotVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.0,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
};
const toolVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1.0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
  // visible: (i = 1) => ({
  //   opacity: 1,
  //   transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  // }),
};
const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Devtools = () => {
  const darkOrange = theme.colors.darkOrange;

  return (
    <ComponentWrapper id="devtools" padding={1.5}>
      <Text as="h2" fontSize={1.5} fontWeight={600} secondary={darkOrange}>
        Dev <span>Tools</span>
      </Text>

      <Container
        direction="row"
        justify="start"
        align="start"
        gap={5}
        padding={1.5}
      >
        {devtools?.map((items, i) => {
          const keys = Object.keys(items);
          const tools = Object.values(items);

          if (!keys || !tools) return null;

          return (
            <Tools key={keys[0]}>
              {tools[0]?.map((tool: string) => {
                const color = devtool_colors[keys[0] as DevtoolColors];
                const letters = Array.from(tool);

                return (
                  <Container
                    key={tool}
                    direction="row"
                    justify="start"
                    align="start"
                    gap={0.25}
                    wrap={false}
                  >
                    <Dot
                      as={motion.div}
                      color={color}
                      key="dot"
                      variants={dotVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                    <Tool
                      as={motion.div}
                      fontSize={1.25}
                      fontWeight={600}
                      color={color}
                      key="tool"
                      variants={toolVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {letters?.map((letter, i) => {
                        return (
                          <motion.span key={i} variants={letterVariants}>
                            {letter}
                          </motion.span>
                        );
                      })}
                    </Tool>
                  </Container>
                );
              })}
            </Tools>
          );
        })}
      </Container>
    </ComponentWrapper>
  );
};

export default React.memo(MotionWrapper(Devtools));

import React from "react";
import { motion, Variants } from "framer-motion";

import { Wrapper, Container, Tools, ToolWrapper, Tool } from "./styles";
import { devtools } from "../../assets/devtools";
import { theme } from "../../styles/globalStyles";
import { MotionWrapper } from "../../wrapper";
import { ComponentWrapper, Dot, Text } from "../common";

const devtool_colors = {
  main: theme.colors.blue,
  ui: theme.colors.red,
  backend: theme.colors.green,
  others: theme.colors.darkgray,
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
  const green = theme.colors.green;

  return (
    <ComponentWrapper id="devtools">
      <Text secondary={green}>
        Dev <span>Tools</span>
      </Text>

      <Container>
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
                  <ToolWrapper key={tool}>
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
                  </ToolWrapper>
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

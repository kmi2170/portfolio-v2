import React from "react";
import { Wrapper, Title, Container, Tools, Tool } from "./styles";

import { devtools } from "../../assets/devtools";
import { theme } from "../../styles/globalStyles";

const devtool_colors = {
  main: theme.colors.blue,
  ui: theme.colors.red,
  backend: theme.colors.green,
  others: theme.colors.darkgray,
};
type DevtoolColors = keyof typeof devtool_colors;

const Devtools = () => {
  return (
    <Wrapper>
      <Title>Dev Tools</Title>

      <Container>
        {devtools?.map((items, i) => {
          const keys = Object.keys(items);
          const tools = Object.values(items);

          if (!keys || !tools) return null;

          return (
            <Tools key={keys[0]}>
              {tools[0]?.map((tool: string) => {
                console.log(tool);
                const color = devtool_colors[keys[0] as DevtoolColors];

                return (
                  <Tool key={tool} color={color}>
                    {tool}
                  </Tool>
                );
              })}
            </Tools>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default React.memo(Devtools);

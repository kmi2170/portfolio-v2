import styled from "styled-components";

const justifySchemas = {
  center: "center",
  start: "flex-start",
  end: "flex-end",
  around: "space-around",
  between: "space-between",
  even: "space-evenly",
};

const alignSchemas = {
  ...justifySchemas,
  stretch: "stretch",
};

type JustifyType = keyof typeof justifySchemas;
type AlignType = keyof typeof alignSchemas;

const Container = styled.div<{
  justify?: JustifyType;
  align?: AlignType;
  direction?: "row" | "column";
  gap?: number;
  wrap?: boolean;
  maxWidth?: number;
}>`
  display: flex;
  flex-wrap: ${({ wrap = true }) => (wrap ? "wrap" : "nowrap")};
  flex-direction: ${({ direction = "row" }) => direction};
  justify-content: ${({ justify }) => justify && justifySchemas[justify]};
  align-items: ${({ align }) => align && alignSchemas[align]};
  gap: ${({ gap }) => gap + "rem"};
  max-width: ${({ maxWidth }) => maxWidth + "px"};
`;

export default Container;

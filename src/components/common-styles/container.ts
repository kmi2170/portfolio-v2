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
}>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`;

export default Container;

import styled from "styled-components";
import Pad from "./pad";

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

const Container = styled(Pad)<{
  justify?: JustifyType;
  align?: AlignType;
  direction?: "row" | "column";
  gap?: number;
  wrap?: boolean;
}>`
  display: flex;
  flex-wrap: ${({ wrap = true }) => (wrap ? "wrap" : "nowrap")};
  flex-direction: ${({ direction = "row" }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap + "rem"};
`;

export default Container;

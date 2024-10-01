import exp from "constants";
import styled from "styled-components";

export const Pad = styled.div<{
  paddings: number[];
}>`
  padding: ${({ paddings }) => {
    return paddings.join("px ") + "px";
  }};
`;

const justifySchema = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
};

type JustifyType = keyof typeof justifySchema;

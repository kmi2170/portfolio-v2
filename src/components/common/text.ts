import styled from "styled-components";

const Text = styled.h2<{
  primary?: string;
  secondary?: string;
  tertiary?: string;
  fontFamily?: string;
  fontSize?: number;
  unit?: string;
  align?: "left" | "center" | "right";
}>`
  color: ${({ primary = "black" }) => primary};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize = 1.5 }) => fontSize + "rem"};
  text-align: ${({ align }) => align};

  span:first-child {
    color: ${({ secondary = "black" }) => secondary};
  }

  span:nth-child(2) {
    color: ${({ tertiary = "black" }) => tertiary};
  }
`;

export default Text;

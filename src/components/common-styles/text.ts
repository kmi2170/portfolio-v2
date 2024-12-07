import styled from "styled-components";

const Text = styled.div<{
  primary?: string;
  secondary?: string;
  tertiary?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number;
  unit?: string;
  align?: "left" | "center" | "right";
  marginTop?: number;
  marginBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}>`
  color: ${({ primary = "black" }) => primary};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize = 1 }) => fontSize + "rem"};
  font-weight: ${({ fontWeight = 1 }) => fontWeight};
  text-align: ${({ align }) => align};

  margin-top: ${({ marginTop = 0 }) => marginTop + "rem"};
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom + "rem"};
  padding-left: ${({ paddingLeft = 0 }) => paddingLeft + "rem"};
  padding-right: ${({ paddingRight = 0 }) => paddingRight + "rem"};

  span:first-child {
    color: ${({ secondary = "black" }) => secondary};
  }

  span:nth-child(2) {
    color: ${({ tertiary = "black" }) => tertiary};
  }
`;

export default Text;

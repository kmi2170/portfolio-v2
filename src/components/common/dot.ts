import styled from "styled-components";

export const Dot = styled.div<{
  color?: string;
  size?: string;
  marginRight?: string;
}>`
  &::before {
    content: "•";
    font-size: ${({ size = "1.25rem" }) => size};
    color: ${({ color = "black" }) => color};
    margin-right: 0.25rem;
    margin-right: ${({ marginRight = "0.25rem" }) => marginRight};
  }
`;

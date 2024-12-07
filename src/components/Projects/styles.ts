import styled from "styled-components";

export const Git = styled.div<{
  color?: string;
}>`
  font-size: 1.75rem;
  margin: 0.75rem;
  margin-left: 2rem;
  color: ${({ color }) => color};
`;

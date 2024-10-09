import styled from "styled-components";

export const Button = styled.button<{
  color?: string;
}>`
  padding: 0.125rem 0.25rem;
  background-color: transparent;
  border: 3px solid ${({ color }) => color};
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

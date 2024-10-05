import styled from "styled-components";

const Tag = styled.div<{
  isSelected?: boolean;
  fontSize?: string;
}>`
  padding: 0.4rem 0.5rem 0.2rem 0.5rem;
  border-radius: 10px;
  font-size: ${({ fontSize = "1rem" }) => fontSize};
  font-weight: 600;

  /* &:hover {
    cursor: pointer;
  } */

  color: ${({ isSelected = false }) => (isSelected ? "white" : "#4b365f")};
  background-color: ${({ isSelected = false }) =>
    isSelected ? "#4b365f" : "white"};
  border: 2px solid
    ${({ isSelected = false }) => (isSelected ? "none" : "#4b365f")};
`;

export default Tag;

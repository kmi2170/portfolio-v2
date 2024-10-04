import styled from "styled-components";

export const Tag = styled.div<{ isSelected?: boolean }>`
  padding: 0.4rem 0.5rem 0.2rem 0.5rem;
  border-radius: 10px;
  font-size: 1rem;
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

export const Tags = styled.div<{
  marginTop?: string;
  marginBottom?: string;
}>`
  margin-top: ${({ marginTop = "0rem" }) => marginTop};
  margin-bottom: ${({ marginBottom = "0rem" }) => marginBottom};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

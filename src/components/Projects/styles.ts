import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.5rem;
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  span {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

export const Git = styled.div`
  font-size: 1.75rem;
  margin: 0.75rem;
  margin-left: 2rem;
  color: ${({ theme }) => theme.colors.blue};
`;

export const SelectTags = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Tag = styled.div<{ isSelected: boolean }>`
  padding: 0.4rem 0.5rem 0.2rem 0.5rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;

  /* &:hover {
    cursor: pointer;
  } */

  color: ${({ isSelected }) => (isSelected ? "white" : "#4b365f")};
  background-color: ${({ isSelected }) => (isSelected ? "#4b365f" : "white")};
  border: 2px solid ${({ isSelected }) => (isSelected ? "none" : "#4b365f")};
`;

export const Description = styled.p`
  text-align: center;
  margin-top: 3rem;
  font-size: 1rem;

  div:nth-child(1) {
    font-size: 1.25rem;
  }

  div:nth-child(2) {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5px;

    span {
      color: #4b365f;
      border: 2px solid #4b365f;
      padding: 0.4rem 0.5rem 0.2rem 0.5rem;
      border-radius: 10px;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: 600;
    }
  }
`;

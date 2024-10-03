import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.5rem;
`;

export const Title = styled.h2`
  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Git = styled.div`
  font-size: 1.75rem;
  margin: 0.75rem;
  margin-left: 2rem;
  color: ${({ theme }) => theme.colors.blue};
`;

export const Description = styled.p`
  text-align: center;
  margin-top: 3rem;
  font-size: 1.25rem;

  span {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5px;

    span {
      padding: 0 0.5rem;
      color: white;
      background-color: #4b365f;
      border-radius: 10px;
    }
  }
`;

export const SelectTags = styled.div`
  span {
    margin-top: 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export const Tag = styled.div<{ isSelected: boolean }>`
  padding: 0.4rem 0.75rem 0.2rem 0.75rem;
  border-radius: 10px;
  font-size: 1.25rem;

  /* &:hover {
    cursor: pointer;
  } */

  color: ${({ isSelected }) => (isSelected ? "white" : "#4b365f")};
  background-color: ${({ isSelected }) => (isSelected ? "#4b365f" : "white")};
  border: 1px solid ${({ isSelected }) => (isSelected ? "none" : "#4b365f")};
`;

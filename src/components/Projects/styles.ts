import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.5rem;
  padding-left: 2rem;
  font-family: "M PLUS Rounded 1c";
`;

export const Title = styled.h2`
  span {
    color: ${({ theme }) => theme.colors.blue};
  }
  /* span { */
  /*   color: rgb(0, 0, 139); */
  /* } */
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
  text-align: left;
  font-size: 1.25rem;
  margin: 1rem;
  margin-left: 3rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: blue;
    z-index: 10;

    svg {
      margin-left: 0.25rem;
      font-size: 1.75rem;
    }
  }
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
    margin: 2rem 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export const Tag = styled.div<{ isSelected: boolean }>`
  padding: 0 0.5rem;
  border-radius: 10px;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
  }

  color: ${({ isSelected }) => (isSelected ? "white" : "#4b365f")};
  background-color: ${({ isSelected }) => (isSelected ? "#4b365f" : "white")};
  border: 1px solid ${({ isSelected }) => (isSelected ? "none" : "#4b365f")};
`;

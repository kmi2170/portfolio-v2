import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem;
  /* background-color: ${({ theme }) => theme.colors.purple}; */
`;

export const Title = styled.h2``;

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-start;
`;

export const Tools = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

export const Tool = styled.div<{
  color: string;
}>`
  padding: 0.6rem 0.75rem 0.5rem 0.75rem;
  border-radius: 10px;
  font-weight: 600;
  color: black;
  /* background-color: ${({ color }) => color}; */
  /* border: 1px solid ${({ color }) => color};
  color: ${({ color }) => color}; */

  &::before {
    content: "•";
    color: ${({ color }) => color};
    margin-right: 0.25rem;
  }
`;

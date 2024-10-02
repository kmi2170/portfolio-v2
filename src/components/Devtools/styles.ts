import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem;
  /* background-color: ${({ theme }) => theme.colors.purple}; */
`;

export const Title = styled.h2`
  span {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Tools = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  justify-content: center;
  align-items: flex-start;
`;

export const ToolWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  justify-content: flex-start;
  align-items: center;
`;

export const Tool = styled.div<{
  color: string;
}>`
  display: flex;
  flex-direction: row;
  font-weight: 600;
  color: black;
  font-size: 1.25rem;
  /* background-color: ${({ color }) => color}; */
  /* border: 1px solid ${({ color }) => color};
  color: ${({ color }) => color}; */
`;

export const Dot = styled.div<{
  color?: string;
}>`
  &::before {
    content: "•";
    font-size: 1.25rem;
    color: ${({ color }) => color};
    margin-right: 0.25rem;
  }
`;

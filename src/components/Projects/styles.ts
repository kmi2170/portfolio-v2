import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.5rem;
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

export const Description = styled.div`
  text-align: center;
  margin-top: 3rem;
  font-size: 1rem;

  p {
    font-size: 1.25rem;
  }
`;

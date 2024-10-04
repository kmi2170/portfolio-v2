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

  div {
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

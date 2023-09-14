import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  font-family: "M PLUS Rounded 1c";
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  padding: 1.5rem;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 10px rgba(168, 168, 168, 0.5);
  max-width: 1200px;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Description = styled.p`
  margin: 1rem 0;
  font-size: 1.3rem;
`;

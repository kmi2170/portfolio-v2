import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem;
  padding-left: 2rem;
  font-family: 'M PLUS Rounded 1c';
  width: 100%;
  margin-left: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 10px rgba(168, 168, 168, 0.5);
  min-height: 60%;
  width: 90%;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;

  span {
    color: ${({ theme }) => theme.colors.blue};
  }

  /* span { */
  /*   color: rgb(0, 0, 139); */
  /* } */
`;

export const Description = styled.p`
  margin: 1rem 0;
  font-size: 1.3rem;
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 350px;
  height: auto;

  @media (min-width: 1200px) {
    height: 20rem;
  }
  /* height: 375px; */
  background: whitesmoke;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(108, 122, 137, 1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &:hover {
    /* box-shadow: 0 0 30px rgba(108, 122, 137, 1); */
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.blue};
  }
`;

export const ProjectName = styled.h3`
  margin: 0.75rem 0;
  padding: 0 0.5rem;
  font-size: 1rem;
  font-weight: 600;
`;

export const ProjectMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Links = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.blue};

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  a {
    display: flex;
    align-items: center;
    svg {
      margin-right: 0.25rem;
      margin-bottom: 0.25rem;
    }
  }
`;

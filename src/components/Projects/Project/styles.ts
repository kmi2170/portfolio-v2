import styled from "styled-components";

export const ProjectWrapper = styled.div`
  max-width: 350px;
  height: auto;
  /* height: 375px; */

  @media (min-width: 1200px) {
    height: 20rem;
  }
  background: whitesmoke;
  border-radius: 5px;
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.darkGray};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &:hover {
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.blue};
  }
`;

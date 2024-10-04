import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 350px;
  height: 375px;
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
  margin: 0.5rem 0;
  font-size: 0.85rem;
`;

export const ProjectMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Hover = styled.div`
  width: 100%;
  height: 190px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  opacity: 0;
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;

  div {
    color: rgba(255, 255, 255, 0.8);

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      font-size: 1rem;
      /* text-align: center; */
    }

    svg {
      width: 20%;
      height: 20%;
    }
  }

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Tags = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  z-index: 10;

  span {
    font-size: 0.75rem;
    font-weight: 600;
    color: #4b365f;
    padding: 0.1rem 0.25rem 0.05rem 0.25rem;
    border: 2px solid #4b365f;
    border-radius: 5px;
  }
`;

export const Links = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;

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

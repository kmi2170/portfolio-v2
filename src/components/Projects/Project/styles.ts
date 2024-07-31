import styled from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
  height: 350px;
  background: whitesmoke;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(108, 122, 137, 1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &:hover {
    /* box-shadow: 0 0 30px rgba(108, 122, 137, 1); */
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.blue};
  }
`;

export const AppName = styled.div`
  margin-top: 0.25rem;
  font-size: 1.5rem;
`;

export const AppImg = styled.div`
  width: 100%;
  height: 200px;
  /* object-fit: cover; */
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
  }
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
`;

export const Links = styled.div`
  width: 90%;
  padding: 0.25rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  z-index: 10;

  a {
    color: blue;

    display: flex;
    align-items: center;

    svg {
      font-size: 1.25rem;
      margin-right: 0.2rem;
    }
  }
`;

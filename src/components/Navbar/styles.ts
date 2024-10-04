import styled from "styled-components";

export const Topbar = styled.div`
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 3rem;
  padding: 0.25rem 0;

  background-color: rgba(255, 255, 255, 0.5);
  /* background-color: rgba(173, 216, 230, 0.5); */
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-shadow: 0 4px 5px rgba(168, 168, 168, 0.5);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-family: "Alex Brush";
  font-weight: 600;
  font-size: 2rem;
  padding: 0 2rem;

  span {
    color: ${({ theme }) => theme.colors.blue};
  }
  /* span { */
  /*   color: rgb(0, 0, 139); */
  /* } */
`;

export const Ul = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem 1rem;

  @media screen and (max-width: 650px) {
    display: none;
    padding: 0 2rem;
  }
`;

export const Li = styled.li`
  list-style: none;
  padding: 0.25rem 0;

  a {
    font-family: "M PLUS Rounded 1c";
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    padding: 0.5rem;
    border-radius: 40%;
  }

  &:hover {
    a {
      /* background-color: rgba(255, 182, 193, 0.3); */
      /* background-color: rgba(255, 182, 193, 0.3); */
      background-color: rgba(51, 153, 255, 0.2);
      cursor: pointer;
    }
  }
`;

export const UlMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 5rem;
  gap: 3rem;
`;

export const Menu = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 650px) {
    display: none;
  }

  svg {
    width: 70%;
    height: 70%;
    color: darkblue;
    margin-right: 10px;
  }
`;

export const SideBar = styled.aside`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 50;
  font-size: 1.5rem;

  padding: 1.5rem;
  background-color: rgba(245, 245, 245, 0.8);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-shadow: -4px 0 5px rgba(168, 168, 168, 0.5);

  svg {
    color: ${({ theme }) => theme.colors.blue};
    &:hover {
      cursor: pointer;
    }
  }
`;

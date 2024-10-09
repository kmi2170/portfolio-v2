import styled from "styled-components";
import { Container } from "../common-styles";

export const NavWrapper = styled(Container).attrs({ as: "nav" })`
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 3.5rem;

  background-color: rgba(173, 216, 230, 0.5);
  box-shadow: 0 4px 5px rgba(168, 168, 168, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

export const Ul = styled(Container).attrs({ as: "ul" })`
  flex: 1;
  list-style: none;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Li = styled.li`
  a {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Menu = styled(Container)<{
  svgColor?: string;
}>`
  width: 40px;
  height: 40px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 600px) {
    display: none;
  }

  svg {
    color: ${({ svgColor }) => svgColor};
    width: 70%;
    height: 70%;
  }
`;

export const SidebarWrapper = styled(Container).attrs({ as: "aside" })<{
  svgColor?: string;
}>`
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
    color: ${({ svgColor }) => svgColor};
    &:hover {
      cursor: pointer;
    }
  }
`;

export const UlMenu = styled(Container).attrs({ as: "ul" })`
  margin-top: 4rem;
  list-style: none;
`;

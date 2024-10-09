import styled from "styled-components";
import { Container } from "../../../common-styles";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalWrapper = styled(Container)`
  position: relative;
  background-color: white;
  z-index: 20;

  border: none;
  border-radius: 5px;

  box-shadow: 0 0 5px rgba(108, 122, 137, 0.8);
  padding: 1rem 1.5rem 2.5rem 1.5rem;
  width: 95vw;
  max-width: 1200px;

  height: auto;
  max-height: 95vh;
  overflow-y: auto;
`;

export const Close = styled.div<{
  svgColor?: string;
}>`
  width: 100%;
  text-align: right;
  margin-top: 0.5rem;

  svg {
    width: 50px;
    height: 50px;
    color: ${({ svgColor }) => svgColor};

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ProjectImg = styled.div`
  width: 75%;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const Ul = styled(Container).attrs({ as: "ul" })`
  width: 90%;
  list-style: none;
`;

export const Li = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.25rem;
`;

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
`;

export const ModalWrapper = styled.dialog`
  position: absolute;
  top: 10vh;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: white;
  z-index: 10;

  border: none;
  border-radius: 5px;

  box-shadow: 0 0 5px rgba(108, 122, 137, 0.8);
  padding: 0.5rem 0.25rem 2.5rem 0.25rem;
  width: 95vw;
  max-width: 1200px;
  height: auto;
  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Close = styled.span`
  width: 100%;
  text-align: right;
  margin-top: 1rem;

  svg {
    width: 50px;
    height: 50px;
    color: ${({ theme }) => theme.colors.blue};

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ProjectImg = styled.div`
  width: 50%;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
  }
`;

export const Features = styled.ul`
  /* width: 90%; */
  font-size: 1rem;

  li {
    list-style: none;
    overflow-wrap: normal;
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
  }
`;

export const Details = styled.ul`
  /* width: 90%; */
  font-size: 0.85rem;

  li {
    list-style: none;
    overflow-wrap: normal;
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
  }
`;

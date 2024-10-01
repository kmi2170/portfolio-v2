import Image from "next/image";
import styled from "styled-components";

export const ImageContainer = styled.div`
  display: grid;
  gap: 0;
  grid-template-columns: repeat(12, 1fr);
  border: 3px solid magenta;
`;

export const ImageGrid = styled.div`
  position: relative;
  width: 100%;
  padding-top: 75%;
  border: 3px solid cyan;
  grid-column: 1 / span 10;

  @media (min-width: 768px) {
    grid-column: 1 / span 9;
  }

  @media only screen and (min-width: 992px) {
    grid-column: 1 / span 8;
  }

  @media only screen and (min-width: 1200px) {
    grid-column: 1 / span 7;
  }
`;

export const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Use 'contain' if you want the entire image to be visible */
`;

export const Row = styled.div`
  width: 100%;
  background-color: yellow;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* &::after {
    content: "";
    clear: both;
    display: table;
  } */
`;

const getWidth = (span: number) => {
  if (!span) return;

  const width = (span / 12) * 100;
  return width;
};

export const Column = styled.div<{
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  color?: string;
}>`
  height: 100%;
  text-align: center;
  background-color: pink;
  border: 2px solid ${({ color }) => color};

  width: ${({ xs }) => (xs ? getWidth(xs) : 100)}%;

  @media (min-width: 768px) {
    width: ${({ sm }) => (sm ? getWidth(sm) : 100)}%;
    width: 50%;

    background-color: blue;
  }

  @media only screen and (min-width: 992px) {
    width: ${({ md }) => (md ? getWidth(md) : 100)}%;
    width: 33.3%;
    background-color: red;
  }

  @media only screen and (min-width: 1200px) {
    width: ${({ lg }) => (lg ? getWidth(lg) : 100)}%;
    width: 25%;
    background-color: purple;
  }
`;

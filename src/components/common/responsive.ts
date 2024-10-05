import styled from "styled-components";

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

import Image from "next/image";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: relative;
  margin-top: 5rem;
  margin-bottom: 2rem;
  padding-bottom: 4rem;

  /* background-color: rgba(59, 60, 54, 0.89); */
  /* background-color: rgba(135, 206, 250, 0.29); */
  background: linear-gradient(
    white 0%,
    #87cefa,
    #87cefa,
    #87cefa,
    lightblue,
    pink 55%,
    gold,
    white 95%
  );

  width: 100%;
`;

export const Profile = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 1400px;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(12, 1fr);
  gap: 0;

  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
`;

export const RowContainer = styled.div<{
  row: number;
  span: number;
}>`
  grid-row: ${({ row }) => row} / span ${({ span }) => span};
`;

export const ImageContainer = styled.div`
  display: grid;
  gap: 0;

  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
`;

export const ImageGridLeft = styled.div`
  position: relative;
  width: 100%;
  padding-top: 75%;
  grid-column: 1 / span 10;

  grid-row: 1;

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

export const ImageGridRight = styled.div`
  position: relative;
  width: 100%;
  padding-top: 75%;
  grid-column: 9 / span 4;
  grid-row: 1;

  @media (min-width: 768px) {
    grid-column: 5 / span 3;
  }

  @media only screen and (min-width: 992px) {
    grid-column: 5 / span 3;
  }

  @media only screen and (min-width: 1200px) {
    grid-column: 5 / span 3;
  }
`;

export const StyledImage = styled(Image)<{
  opacity?: number;
}>`
  position: absolute;
  opacity: ${({ opacity = 1 }) => opacity};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Use 'contain' if you want the entire image to be visible */
`;

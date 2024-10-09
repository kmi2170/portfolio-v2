import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-top: 5rem;
  margin-bottom: 2rem;

  width: 100%;
`;

export const Profile = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 1400px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ImageContainer = styled.div`
  display: grid;
  gap: 0;
  grid-template-columns: repeat(12, 1fr);
`;

export const ImageGrid = styled.div`
  position: relative;
  width: 100%;
  padding-top: 75%;
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

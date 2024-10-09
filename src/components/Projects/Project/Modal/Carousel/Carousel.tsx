import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { StyledImage } from "../../../../Header/styles";
import styled from "styled-components";

const responsive = {
  0: {
    items: 1,
  },
  512: {
    items: 1,
  },
};

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 75%;

  @media screen and (max-width: 600px) {
    width: 80vw;
  }
`;

const Carousel = ({ imageUrls }: { imageUrls: string[] }) => {
  const items = imageUrls?.map((imageUrl, i) => (
    <ImageWrapper key={`image-${i}`}>
      <StyledImage src={imageUrl} alt={imageUrl} fill />
    </ImageWrapper>
  ));

  return (
    <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={10000}
      animationDuration={1500}
      disableDotsControls
      // disableButtonsControls
      // responsive={responsive}
      autoPlay
      items={items}
    />
  );
};

export default Carousel;

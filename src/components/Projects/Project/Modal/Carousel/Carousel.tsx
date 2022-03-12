import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
  0: {
    items: 1,
  },
  512: {
    items: 1,
  },
};

const Carousel = ({ imageUrls }: { imageUrls: string[] }) => {
  const items = imageUrls?.map((imageUrl, i) => (
    <img src={imageUrl} alt={imageUrl} />
  ));

  return (
    <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={10000}
      animationDuration={1500}
      disableDotsControls
      // disableButtonsControls
      responsive={responsive}
      autoPlay
      items={items}
    />
  );
};

export default Carousel;

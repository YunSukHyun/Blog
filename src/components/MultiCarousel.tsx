"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    paritialVisibilityGutter: 30,
  },
};

type Props = {
  children: React.ReactNode;
};
export const MultiCarousel = ({ children }: Props) => {
  return (
    <Carousel infinite autoPlay itemClass="m-2" responsive={responsive}>
      {children}
    </Carousel>
  );
};

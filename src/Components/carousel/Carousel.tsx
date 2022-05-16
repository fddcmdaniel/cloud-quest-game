import React, { ReactElement, useState } from 'react';

import { CarouselSlide, CarouselSlides, CarouselWrapper, MainContainer, NextButton } from './styles-swipper';

interface CarouselProps {
  children: JSX.Element[];
}

const Carousel = ({ children }: CarouselProps) => {
  const [currentslide, setCurrentslide] = useState(0);

  const activeSlide = children.map((slide: ReactElement, index: number) => (
    <CarouselSlide key={index} active={currentslide === index}>
      {slide}
    </CarouselSlide>
  ));


  return (
    <MainContainer>
      <CarouselWrapper>
        <CarouselSlides currentSlide={currentslide}>
          {activeSlide}
        </CarouselSlides>
      </CarouselWrapper>
      <NextButton
        onClick={() => {
          setCurrentslide((currentslide + 1) % activeSlide.length);
        }}
      >
        Right
      </NextButton>
    </MainContainer>
  );
}

export default Carousel;
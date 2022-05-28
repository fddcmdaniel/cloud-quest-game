import { ReactElement, useContext, useState } from 'react';
import { LaunchContext } from '../../utils/types';
import { Button } from '../styles-button';

import { CarouselSlide, CarouselSlides, CarouselWrapper, MainContainer } from './styles-swipper';
import { CarouselContext } from './types-context';

interface CarouselProps {
  children: ReactElement[];
  setIsOpen: (e: boolean) => void;
}

const Carousel = ({ children, setIsOpen }: CarouselProps) => {
  const { setDisplayModalClose } = useContext(LaunchContext);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [currentslide, setCurrentslide] = useState(0);

  const onButtonSwipperClick = () => {
    if (currentslide === activeSlide.length - 1) {
      setIsOpen(false);
      setDisplayModalClose(true);
    }
    if (currentslide === 0) { setDisplayModalClose(false) }
    setCurrentslide((currentslide + 1) % activeSlide.length);
  }

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
      <div style={{ position: "absolute", bottom: 30 }}>
        <Button
          variant="primary"
          size="200px"
          onClick={onButtonSwipperClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {(currentslide === 0 ? "Iniciar" : currentslide === activeSlide.length - 1 ? "Terminar" : "Seguinte")}
        </Button>
      </div>
    </MainContainer>
  );
}

export default Carousel;
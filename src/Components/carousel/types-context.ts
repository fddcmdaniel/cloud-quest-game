import { createContext } from "react";

interface ICarouselContext {
  correctAnswer: boolean;
  setCorrectAnswer: (correct: boolean) => void;
}

export const CarouselContext = createContext<ICarouselContext>({
  correctAnswer: false,
  setCorrectAnswer: () => { }
});
import { createContext } from "react";

export const DefaultResult = {
  right: 0,
  wrong: 0
}

export type IResult = typeof DefaultResult;

interface ICarouselContext {
  correctAnswer: boolean;
  setCorrectAnswer: (correct: boolean) => void;
  currentslide: number;
  result: IResult;
  setResult: (result: IResult) => void;
  activeSlide: JSX.Element[];
  answerSelected: boolean;
  setAnswerSelected: (selected: boolean) => void;
}

export const CarouselContext = createContext<ICarouselContext>({
  correctAnswer: false,
  setCorrectAnswer: () => { },
  currentslide: 0,
  result: DefaultResult,
  setResult: () => { },
  activeSlide: [],
  answerSelected: true,
  setAnswerSelected: () => { }
});
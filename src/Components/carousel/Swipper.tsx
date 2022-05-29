import { useEffect, useState } from 'react';
import { ILevel } from '../../Pages/Levels';
import { fetchWrapper } from '../../utils/api';
import Carousel from './Carousel';
import Slide from './Slide';

interface SwipperProps {
  level: ILevel | undefined;
  setIsOpen: (e: boolean) => void;
}

export interface IQuestion {
  id: number;
  question: string;
}

const Swipper = ({ level, setIsOpen }: SwipperProps) => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const getQuestions = async () => {
    try {
      const data = await fetchWrapper(`/level/${level?.id}/questions`, {
        method: "GET",
        credentials: "include"
      });
      setQuestions(data);
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  useEffect(() => { getQuestions() }, []);

  return (
    <Carousel setIsOpen={setIsOpen} level={level}>
      {questions.map((question: IQuestion, index: number) => {
        return (
          <Slide key={index} level={level} question={question} />
        );
      })}
    </Carousel>
  );
};

export default Swipper;

import { useContext, useEffect, useState } from 'react';
import { ILevel } from '../../Pages/Levels';
import { fetchWrapper } from '../../utils/api';

import { LaunchContext } from '../../utils/types';
import Answers from '../answers/Answers';
import { Container, Helper, Question, TextWrapper, Title } from './styles-swipper';
import { IQuestion } from './Swipper';

interface SlideProps {
  level: ILevel | undefined;
  question?: IQuestion;
}

export interface IAnswer {
  id: number;
  answer: string;
  correct: boolean;
}

const Slide = ({ level, question }: SlideProps) => {
  const { user } = useContext(LaunchContext);
  const [answers, setAnswers] = useState<IAnswer[]>([]);

  const getAnswers = async () => {
    try {
      const data = await fetchWrapper(`/question/${question?.id}/answers`, {
        method: "GET",
        credentials: "include"
      });
      setAnswers(data);
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  useEffect(() => {
    getAnswers();
  }, []);

  return (
    <>
      <Container>
        <TextWrapper>
          {/* <Title>Bem-vindo(a) {user.name}!</Title>
          <p>{level?.description}</p> */}
          <Question>{question?.question}</Question>
          <Answers answers={answers} />
        </TextWrapper>
      </Container>
      {/* <Helper /> */}
    </>
  );
};

export default Slide;
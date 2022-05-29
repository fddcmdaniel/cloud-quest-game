
import { useContext, useEffect, useState } from 'react';

import { ILevel } from '../../Pages/Levels';
import { fetchWrapper } from '../../utils/api';
import { IntroTexts } from '../../utils/intro-texts';
import { LaunchContext } from '../../utils/types';
import Answers from '../answers/Answers';
import { Container, Description, Helper, Lose, LoseBg, Question, TextWrapper, Title, Win, WinBg } from './styles-swipper';
import { IQuestion } from './Swipper';
import { CarouselContext } from './types-context';

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
  const { currentslide, correctAnswer, setResult, result, activeSlide } = useContext(CarouselContext);
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

  useEffect(() => { getAnswers() }, []);

  const introPage = () => {
    if (level?.id === 1) {
      return (
        <>
          <Title style={{ marginBottom: 10 }}>Olá, {user.name} !</Title>
          <Description>
            {IntroTexts[0]}
          </Description>
          <Helper />
        </>
      );
    } else if (level?.id === 2) {
      return (
        <>
          <Title style={{ marginBottom: 10 }}>Olá, {user.name} !</Title>
          <Description>
            {IntroTexts[1]}
          </Description>
          <Helper />
        </>
      );
    } else if (level?.id === 3) {
      return (
        <>
          <Title style={{ marginBottom: 10 }}>Olá, {user.name} !</Title>
          <Description>
            {IntroTexts[2]}
          </Description>
          <Helper />
        </>
      );
    } else if (level?.id === 4) {
      return (
        <>
          <Title style={{ marginBottom: 10 }}>Olá, {user.name} !</Title>
          <Description>
            {IntroTexts[3]}
          </Description>
          <Helper />
        </>
      );
    } else if (level?.id === 5) {
      return (
        <>
          <Title style={{ marginBottom: 10 }}>Olá, {user.name} !</Title>
          <Description>
            {IntroTexts[4]}
          </Description>
          <Helper />
        </>
      );
    }
  }

  const errorMessage = (): JSX.Element => {
    return (
      <>
        <Title style={{ marginBottom: 10 }}>Upps!</Title>
        <Description style={{ color: "#eb5353" }}>Resposta errada!</Description>
        <div style={{ position: "relative", zIndex: 99, marginTop: "5%", marginLeft: "23%" }}>
          <Lose style={{ zIndex: 999 }} />
          <LoseBg style={{ marginLeft: "30%" }} />
        </div>
      </>
    );
  }

  const sucessMessage = (): JSX.Element => {
    return (
      <>
        <Title initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: 10 }}>
          Uiipii!
        </Title>
        <Description style={{ color: "#14c38e" }}>Resposta certa!</Description>
        <div style={{ position: "relative", zIndex: 99, marginTop: "5%", marginLeft: "23%" }}>
          <Win style={{ zIndex: 999 }} />
          <WinBg style={{ marginLeft: "30%" }} />
        </div>
      </>
    );
  }

  if (currentslide === 0) {
    return (
      <Container>
        <TextWrapper>
          <>
            {introPage()}
          </>
        </TextWrapper>
      </Container>

    );
  } else if (currentslide % 2 !== 0) {
    return (
      <Container>
        <TextWrapper>
          <>
            <Question>{question?.question}</Question>
            <Answers answers={answers} />
          </>
        </TextWrapper>
      </Container>
    );
  } else {
    if (correctAnswer) {
      return (
        <Container>
          <TextWrapper>
            <>
              {sucessMessage()}
            </>
          </TextWrapper>
        </Container>
      );
    } else {
      return (
        <Container>
          <TextWrapper>
            <>
              {errorMessage()}
            </>
          </TextWrapper>
        </Container>
      );
    }
  }
};

export default Slide;
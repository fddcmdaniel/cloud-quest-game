
import { useContext, useEffect, useState } from 'react';
import { IAnswer } from '../carousel/Slide';
import { CarouselContext } from '../carousel/types-context';
import { RadioButton } from './styles';

interface AnswersProps {
  answers: IAnswer[];
}

interface RadioButtonProps {
  id: number;
  color: string;
  selected: boolean;
}

const Answers = ({ answers }: AnswersProps) => {
  const { setCorrectAnswer, setAnswerSelected } = useContext(CarouselContext);
  const [radioButtonStyle, setRadioButtonStyle] = useState<RadioButtonProps[]>([]);

  useEffect(() => {
    if (radioButtonStyle.length < answers.length) {
      Object.keys(answers).map((key: any) => {
        const newRadioButtonStyle = { id: answers[key].id, color: "rgba(244, 238, 255, 0.50)", selected: false };
        setRadioButtonStyle([...radioButtonStyle, newRadioButtonStyle]);
      });
    }
  });

  const onQuestionSelect = (id: number, correct: boolean) => {
    Object.keys(radioButtonStyle).map((key: any) => {
      if (answers[key].id === id) {
        const updateRadioButtonStyle = [...radioButtonStyle];
        updateRadioButtonStyle[key].color = "#4d77ff";
        updateRadioButtonStyle[key].selected = true;
        setRadioButtonStyle(updateRadioButtonStyle);
      } else {
        const updateRadioButtonStyle = [...radioButtonStyle];
        updateRadioButtonStyle[key].color = "rgba(244, 238, 255, 0.50)";
        updateRadioButtonStyle[key].selected = false;
        setRadioButtonStyle(updateRadioButtonStyle);
      }
      setCorrectAnswer(correct);
      setAnswerSelected(false);
    });
  }

  return (
    <>
      {Object.keys(answers).map((key: any, index: number) => {
        return (
          <RadioButton
            key={index}
            whileHover={{ scale: 1.01 }}
            selected={radioButtonStyle[key]?.selected || false}
            backgroundColor={radioButtonStyle[key]?.color || "rgba(244, 238, 255, 0.50)"}
            onClick={() => onQuestionSelect(answers[key].id, answers[key].correct)}>
            {answers[key].answer}
          </RadioButton>
        );
      })}
    </>
  );
};

export default Answers;
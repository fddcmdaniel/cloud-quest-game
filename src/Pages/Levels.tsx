
import { useState } from 'react';
import Swipper from '../Components/carousel/Swipper';
import Modal from '../Components/Modal';
import { ButtonLevelProps, ButtonProps, LevelButton } from '../styles';



interface ILevels {
  id: number;
  title: string;
  description: string;
}

const Levels = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onModalButtonClick = () => setIsOpen(!isOpen);

  return (
    <>
      {ButtonLevelProps.map((prop: ButtonProps, index: number) => {
        console.log("Level", ButtonLevelProps[index]);
        return (
          <LevelButton
            key={index}
            marginLeft={ButtonLevelProps[index].marginLeft}
            marginTop={prop.marginTop}
            borderColor={prop.borderColor}
            backgroundColor={prop.backgroundColor}
            backgroundColor_hover={prop.backgroundColor_hover}
            backgroundColor_focus={prop.backgroundColor_focus}
            backgroundColor_active={prop.backgroundColor_active}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onModalButtonClick}
          >
            {index + 1}
          </LevelButton>
        );
      })}
      <Modal isOpen={isOpen} handleClose={onModalButtonClick} children={<Swipper />} ></Modal>
    </>
  );
};

export default Levels;

import { useContext, useEffect, useState } from 'react';
import { FaStar } from "@react-icons/all-files/fa/FaStar";

import Swipper from '../Components/carousel/Swipper';
import Modal from '../Components/Modal';
import { BadgeButton, ButtonBadgeProps, ButtonLevelProps, LevelButton } from '../styles';
import { fetchWrapper } from '../utils/api';
import { LaunchContext } from '../utils/types';

export interface ILevel {
  id: number;
  title: string;
  description: string;
}

const Levels = () => {
  const [levels, setLevels] = useState<ILevel[]>([]);
  const [level, setLevel] = useState<ILevel>();
  const [isOpen, setIsOpen] = useState(false);

  const onModalButtonClick = (level: ILevel | undefined) => {
    return () => {
      setIsOpen(!isOpen);
      setLevel(level);
    }
  }

  const getLevels = async () => {
    try {
      const data = await fetchWrapper("/levels", {
        method: "GET",
        credentials: "include"
      });
      setLevels(data);
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  useEffect(() => { getLevels() }, []);

  return (
    <>
      {levels.map((level: ILevel, index: number) => {
        console.log("index", index);
        return (
          <>
            <LevelButton
              key={index}
              marginLeft={ButtonLevelProps[index].marginLeft}
              marginTop={ButtonLevelProps[index].marginTop}
              borderColor={ButtonLevelProps[index].borderColor}
              backgroundColor={ButtonLevelProps[index].backgroundColor}
              backgroundColor_hover={ButtonLevelProps[index].backgroundColor_hover}
              backgroundColor_focus={ButtonLevelProps[index].backgroundColor_focus}
              backgroundColor_active={ButtonLevelProps[index].backgroundColor_active}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onModalButtonClick(level)}
            >
              {level.title}
            </LevelButton>
            <BadgeButton
              key={index + 99}
              marginLeft={ButtonBadgeProps[index].marginLeft}
              marginTop={ButtonBadgeProps[index].marginTop}
            >
              <FaStar color="#F7D716" size={20} />
              <FaStar color="#F7D716" size={20} style={index !== 4 ? { marginBottom: 15, marginLeft: 4 } : { marginBottom: 8, marginLeft: 7 }} />
              <FaStar color="#F7D716" size={20} style={index !== 4 ? { marginBottom: 14, marginLeft: 9 } : { marginBottom: 30, marginLeft: 0 }} />
            </BadgeButton>
          </>
        );
      })}
      <Modal isOpen={isOpen} handleClose={onModalButtonClick(level)} children={<Swipper level={level} setIsOpen={setIsOpen} />} ></Modal>
    </>
  );
};

export default Levels;
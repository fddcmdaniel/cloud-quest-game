
import { useContext, useEffect, useState } from 'react';

import Swipper from '../Components/carousel/Swipper';
import Modal from '../Components/Modal';
import { BadgeButton, ButtonBadgeProps, ButtonLevelProps, LevelButton } from '../styles';
import { fetchWrapper } from '../utils/api';
import StartsCheck from '../utils/StartsCheck';
import { DefaultLevelAccess, ILevelAccess, LaunchContext } from '../utils/types';

export interface ILevel {
  id: number;
  title: string;
  description: string;
}

const Levels = () => {
  const { user } = useContext(LaunchContext);
  const [levels, setLevels] = useState<ILevel[]>([]);
  const [level, setLevel] = useState<ILevel>();
  const [levelAccess, setLevelAccess] = useState<ILevelAccess>(DefaultLevelAccess);
  const [totalStars, setTotalStars] = useState(user.level1 + user.level2 + user.level3 + user.level4 + user.level5);
  const [isOpen, setIsOpen] = useState(false);

  const onModalButtonClick = (id?: number, title?: string, description?: string) => {
    return () => {
      setIsOpen(!isOpen);
      setLevel({ id: Number(id), title: String(title), description: String(description) });
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

  useEffect(() => {
    if (user) {
      setTotalStars(user.level1 + user.level2 + user.level3 + user.level4 + user.level5);
      if (totalStars >= 1 && totalStars <= 3) {
        setLevelAccess({ ...levelAccess, 1: false });
      } else if (totalStars >= 3 && totalStars <= 6 && user.level2 >= 1) {
        setLevelAccess({ ...levelAccess, 2: false });
      } else if (totalStars >= 6 && totalStars <= 12 && user.level3 >= 1) {
        setLevelAccess({ ...levelAccess, 3: false });
      } else if (totalStars === 12) {
        setLevelAccess({ ...levelAccess, 4: false });
      }
    }
  }, [user])

  console.log(`Access ${levelAccess[0]}, ${levelAccess[1]}, ${levelAccess[2]}, ${levelAccess[3]}, ${levelAccess[4]}, total stars ${totalStars}`);

  return (
    <>
      {Object.keys(levels).map((key: any, index: number) => {
        return (
          <>
            <LevelButton
              //@ts-ignore
              disabled={levelAccess[key]}
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
              onClick={onModalButtonClick(levels[key].id, levels[key].title, levels[key].description)}
            >
              {levels[key].title}
            </LevelButton>
            <BadgeButton
              key={index + 99}
              marginLeft={ButtonBadgeProps[index].marginLeft}
              marginTop={ButtonBadgeProps[index].marginTop}
            >
              <StartsCheck id={levels[key].id} index={index} />
            </BadgeButton>
          </>
        );
      })}
      <Modal isOpen={isOpen} handleClose={onModalButtonClick()} children={<Swipper level={level} setIsOpen={setIsOpen} />} ></Modal>
    </>
  );
};

export default Levels;
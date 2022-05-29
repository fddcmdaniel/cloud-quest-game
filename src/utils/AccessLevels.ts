import { useContext, useState } from "react";
import { ILevelAccess, LaunchContext } from "./types";

interface AccessLevelsProps {
  setLevelAccess: (accessLevel: ILevelAccess) => void;
}

const AccessLevels = ({ setLevelAccess }: AccessLevelsProps) => {
  const { user } = useContext(LaunchContext);

  const [totalStars, setTotalStars] = useState(0);

  setTotalStars(user.level1 + user.level2 + user.level3 + user.level4 + user.level5);

  if (totalStars >= 1 && totalStars <= 3) {
    setLevelAccess({
      0: false,
      1: false,
      2: true,
      3: true,
      4: true
    });
  } else if (totalStars >= 3 && totalStars <= 6 && user.level2 >= 1) {
    setLevelAccess({
      0: false,
      1: false,
      2: false,
      3: true,
      4: true
    });
  } else if (totalStars >= 6 && totalStars <= 12 && user.level3 >= 1) {
    setLevelAccess({
      0: false,
      1: false,
      2: false,
      3: false,
      4: true
    });
  } else if (totalStars === 12) {
    setLevelAccess({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false
    });
  }
}

export default AccessLevels;
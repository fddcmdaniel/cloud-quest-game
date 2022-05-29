import { useState } from "react";
import LoginModal from "./Components/login-modal/LoginModal";
import Container from "./Components/tabs/Container";
import Levels from "./Pages/Levels";
import { AppContainer } from "./styles";
import { DefaultUser, IUser, LaunchContext } from "./utils/types";

export const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [displayModalClose, setDisplayModalClose] = useState(true);
  const [loginState, setLoginState] = useState(false);
  const [user, setUser] = useState<IUser>(DefaultUser);
  const onModalButtonClick = () => setIsOpen(!isOpen);

  const loginCache = localStorage.getItem("login");

  return (
    <LaunchContext.Provider
      value={{
        loginState,
        setLoginState,
        user,
        setUser,
        displayModalClose,
        setDisplayModalClose,
      }}
    >
      <AppContainer>
        {loginState ? (
          <Levels />
        ) : (
          <LoginModal
            isOpen={isOpen}
            handleClose={onModalButtonClick}
            children={<Container />}
          ></LoginModal>
        )}
      </AppContainer>
    </LaunchContext.Provider>
  );
};

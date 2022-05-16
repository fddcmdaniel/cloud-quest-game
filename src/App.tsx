import { useState } from 'react';
import LoginModal from './Components/login-modal/LoginModal';
import Container from './Components/tabs/Container';
import Levels from './Pages/Levels';
import { AppContainer } from './styles'
import { DefaultUser, IUser, LaunchContext } from './utils/types';

export const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const onModalButtonClick = () => setIsOpen(!isOpen);
  const [loginState, setLoginState] = useState(false);
  const [user, setUser] = useState<IUser>(DefaultUser);

  return (
    <LaunchContext.Provider value={{ loginState, setLoginState, user, setUser }}>
      <AppContainer>
        {!loginState && (
          <LoginModal isOpen={isOpen} handleClose={onModalButtonClick} children={<Container />}></LoginModal>)}
        <Levels />
      </AppContainer>
    </LaunchContext.Provider>
  );
}

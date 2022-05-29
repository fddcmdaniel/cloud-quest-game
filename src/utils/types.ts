import { createContext } from "react";

export const DefaultUser = {
  id: -1,
  name: "",
  email: "",
  password: "",
  level1: 0,
  level2: 0,
  level3: 0,
  level4: 0,
  level5: 0,
}

export const DefaultLevelAccess = {
  0: false,
  1: true,
  2: true,
  3: true,
  4: true
}

export type ILevelAccess = typeof DefaultLevelAccess;
export type IUser = typeof DefaultUser;

interface ILaunchContext {
  loginState: boolean;
  setLoginState: (state: boolean) => void;
  user: IUser;
  setUser: (user: IUser) => void;
  displayModalClose: boolean;
  setDisplayModalClose: (state: boolean) => void;
}

export const LaunchContext = createContext<ILaunchContext>({
  loginState: false,
  setLoginState: () => { },
  user: DefaultUser,
  setUser: () => { },
  displayModalClose: true,
  setDisplayModalClose: () => { }
});
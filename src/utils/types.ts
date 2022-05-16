import { createContext } from "react";

export const DefaultUser = {
  id: -1,
  name: "",
  email: "",
  password: "",
  level_one: 0,
  level_two: 0,
  level_three: 0,
  level_four: 0,
  level_five: 0,
}

export type IUser = typeof DefaultUser;

interface ILaunchContext {
  loginState: boolean;
  setLoginState: (state: boolean) => void;
  user: IUser;
  setUser: (user: IUser) => void;
}

export const LaunchContext = createContext<ILaunchContext>({
  loginState: false,
  setLoginState: () => { },
  user: DefaultUser,
  setUser: () => { }
});
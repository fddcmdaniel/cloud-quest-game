import React, { createContext, useContext, useEffect, useState } from "react";

import { ErrorLabel } from "./styles";
import Input from "../Components/input/Input";
import { Button } from "../Components/styles-button";
import { Link } from "../Components/tabs/styles-tabs";
import { fetchWrapper } from "../utils/api";
import { DefaultUser, LaunchContext } from "../utils/types";
import PasswordStrength from "../Components/password-strength/PasswordStrength";

interface ILoginContext {
  passwordStrength: string;
  setPasswordStrength: (password: string) => void;
  isButtonDisabled: boolean;
  setIsButtonDisabled: (disable: boolean) => void;
}

export const LoginContext = createContext<ILoginContext>({
  passwordStrength: "Muito fraca",
  setPasswordStrength: () => {},
  isButtonDisabled: true,
  setIsButtonDisabled: () => {},
});

interface SignupProps {
  setActive: (state: number) => void;
}

const Signup = ({ setActive }: SignupProps) => {
  const { user, setUser } = useContext(LaunchContext);
  const [errorLabel, setErrorLabel] = useState(false);

  const [passwordStrength, setPasswordStrength] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const alreadyAccountClick = () => {
    setActive(0);
    setErrorLabel(false);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "name") {
      setUser({ ...user, name: e.target.value });
    }
    if (e.target.id === "email") {
      setUser({ ...user, email: e.target.value });
    }
    if (e.target.id === "password") {
      setUser({ ...user, password: e.target.value });
    }
  };

  useEffect(() => {
    if (user.password.length <= 4) {
      setPasswordStrength("Minímo de caracteres 4");
      setIsButtonDisabled(true);
      return;
    } else {
      const capsCount = (user.password.match(/[A-Z]/g) || []).length;
      const smallCount = (user.password.match(/[a-z]/g) || []).length;
      const numberCount = (user.password.match(/[0-9]/g) || []).length;
      const symbolCount = (user.password.match(/\W/g) || []).length;
      if (capsCount < 1) {
        setPasswordStrength("Pelo menos um letra maiúscula");
        setIsButtonDisabled(true);
        return;
      } else if (smallCount < 1) {
        setPasswordStrength("Pelo menos um letra minúscula");
        setIsButtonDisabled(true);
        return;
      } else if (numberCount < 1) {
        setPasswordStrength("Pelo menos um número");
        setIsButtonDisabled(true);
        return;
      } else if (symbolCount < 1) {
        setPasswordStrength("Pelo menos um caracter especial (*#.-)");
        setIsButtonDisabled(true);
        return;
      }
      setIsButtonDisabled(false);
      setPasswordStrength("");
    }
  }, [user.password]);

  const onSignupClick = async () => {
    if (!user.name || !user.email || !user.password || passwordStrength) {
      setErrorLabel(true);
      return;
    }
    try {
      const data = await fetchWrapper("/user", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ user }),
      });
      if (data) {
        setActive(0);
        setUser(DefaultUser);
      }
      console.log("Post Success: ", data);
    } catch (err) {
      console.log("Error: ", err);
    }
    setErrorLabel(false);
  };

  return (
    <LoginContext.Provider
      value={{
        passwordStrength,
        setPasswordStrength,
        isButtonDisabled,
        setIsButtonDisabled,
      }}
    >
      <Input
        placeholder="Nome"
        type="text"
        value={user.name}
        label="Nome"
        id="name"
        onChange={onInputChange}
      />
      <Input
        placeholder="E-mail"
        type="email"
        value={user.email}
        label="E-mail"
        id="email"
        onChange={onInputChange}
      />
      <Input
        placeholder="Palavra-passe"
        type="password"
        value={user.password}
        label="Palavra-passe"
        id="password"
        onChange={onInputChange}
      />
      <ErrorLabel visible={errorLabel}>
        {passwordStrength || "Preenchimento obrigatório!"}
      </ErrorLabel>
      <div
        style={{
          position: "relative",
          marginLeft: "auto",
          marginRight: "auto",
          width: "45%",
        }}
      >
        <Button
          variant="primary"
          size="200px"
          onClick={onSignupClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Registar
        </Button>
        <Link onClick={alreadyAccountClick}>Já tem conta?</Link>
      </div>
    </LoginContext.Provider>
  );
};

export default Signup;

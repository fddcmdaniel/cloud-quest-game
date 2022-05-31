
import React, { useContext, useEffect, useState } from 'react';

import { ErrorLabel } from './styles';
import Input from '../Components/input/Input';
import { Button } from '../Components/styles-button';
import { Link } from '../Components/tabs/styles-tabs';
import { fetchWrapper } from '../utils/api';
import { DefaultUser, LaunchContext } from '../utils/types';
import { capsREGEX, emailREGEX, numberREGEX, smallREGEX, symbolREGEX } from '../utils/constants';

interface SignupProps {
  setActive: (state: number) => void;
}

const DefaultErrorLabel = {
  label: "",
  state: false
}

type IErrorLabel = typeof DefaultErrorLabel;

const Signup = ({ setActive }: SignupProps) => {
  const { user, setUser } = useContext(LaunchContext);
  const [errorLabel, setErrorLabel] = useState<IErrorLabel>(DefaultErrorLabel);



  const alreadyAccountClick = () => {
    setActive(0);
    setErrorLabel({ label: "", state: false });
  }

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
    setErrorLabel({ label: "", state: false })
  }

  const onSignupClick = async () => {
    if (!user.name || !user.email || !user.password) {
      return setErrorLabel({ label: "Preenchimento obrigatório!", state: true });
    } else {
      const capsCount = (user.password.match(capsREGEX) || []).length;
      const smallCount = (user.password.match(smallREGEX) || []).length;
      const numberCount = (user.password.match(numberREGEX) || []).length;
      const symbolCount = (user.password.match(symbolREGEX) || []).length;

      if (!user.email.match(emailREGEX)) return setErrorLabel({ label: "E-mail inválido!", state: true });
      if (capsCount < 1) return setErrorLabel({ label: "Palavra-passe requer pelo menos uma caracter maiúsculo!", state: true });
      if (smallCount < 1) return setErrorLabel({ label: "Palavra-passe requer pelo menos um caracter minúsculo!", state: true });
      if (numberCount < 1) return setErrorLabel({ label: "Palavra-passe requer pelo menos um caracter numérico!", state: true });
      if (symbolCount < 1) return setErrorLabel({ label: "Palavra-passe requer pelo menos um caracter especial!", state: true });
    }

    try {
      const data = await fetchWrapper("/user", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ user })
      });
      if (data) {
        setActive(0);
        setUser(DefaultUser);
      }
      console.log("Post Success: ", data);
    } catch (err) {
      console.log("Error: ", err);
    }
    setErrorLabel({ label: "", state: false })
  }

  return (
    <>
      <Input placeholder="Nome" type="text" value={user.name} label="Nome" id="name" onChange={onInputChange} />
      <Input placeholder="E-mail" type="email" value={user.email} label="E-mail" id="email" onChange={onInputChange} />
      <Input placeholder="Palavra-passe" type="password" value={user.password} label="Palavra-passe" id="password" onChange={onInputChange} />
      <ErrorLabel visible={errorLabel.state}>{errorLabel.label}</ErrorLabel>
      <div style={{ position: "relative", marginLeft: "auto", marginRight: "auto", width: "45%" }}>
        <Button
          variant="primary"
          size="200px"
          onClick={onSignupClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Registar
        </Button>
        <Link onClick={alreadyAccountClick} >Já tem conta?</Link>
      </div>
    </>
  );
};

export default Signup;
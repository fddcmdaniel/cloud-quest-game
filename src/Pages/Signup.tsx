
import React, { useContext, useState } from 'react';
import { ErrorLabel } from './styles';
import Input from '../Components/input/Input';
import { Button } from '../Components/styles-button';
import { Link } from '../Components/tabs/styles-tabs';
import { fetchWrapper } from '../utils/api';
import { DefaultUser, IUser, LaunchContext } from '../utils/types';

interface SignupProps {
  setActive: (state: number) => void;
}

const Signup = ({ setActive }: SignupProps) => {
  const { user, setUser } = useContext(LaunchContext);
  const [errorLabel, setErrorLabel] = useState(false);

  const alreadyAccountClick = () => {
    setActive(0);
    setErrorLabel(false);
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
  }

  const onSignupClick = async () => {
    if (!user.name || !user.email || !user.password) return setErrorLabel(true);
    console.log(user);

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
    setErrorLabel(false);
  }

  return (
    <>
      <Input placeholder="Nome" type="text" value={user.name} label="Nome" id="name" onChange={onInputChange} />
      <Input placeholder="E-mail" type="email" value={user.email} label="E-mail" id="email" onChange={onInputChange} />
      <Input placeholder="Palavra-passe" type="password" value={user.password} label="Palavra-passe" id="password" onChange={onInputChange} />
      <ErrorLabel visible={errorLabel}>Preenchimento obrigatório!</ErrorLabel>
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
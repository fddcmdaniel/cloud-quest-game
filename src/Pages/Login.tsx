
import React, { useContext, useState } from 'react';
import { ErrorLabel } from './styles';
import Input from '../Components/input/Input';
import { Button } from '../Components/styles-button';
import { Link } from '../Components/tabs/styles-tabs';
import { fetchWrapper } from '../utils/api';
import { LaunchContext } from '../utils/types';

interface LoginProps {
  setActive: (state: number) => void;
};

const DefaultErrorLabel = {
  message: "",
  status: false
};

type IErrorLabel = typeof DefaultErrorLabel;

const Login = ({ setActive }: LoginProps) => {
  const [errorLabel, setErrorLabel] = useState<IErrorLabel>(DefaultErrorLabel);
  const { setLoginState, user, setUser } = useContext(LaunchContext);

  const noAccountClick = () => {
    setActive(1);
    setErrorLabel({ ...errorLabel, status: false });
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "email") {
      setUser({ ...user, email: e.target.value });
    }
    if (e.target.id === "password") {
      setUser({ ...user, password: e.target.value });
    }
  }

  const onLoginClick = async () => {
    if (!user.email || !user.password) {
      return setErrorLabel({ ...errorLabel, message: "Preenchimento obrigatório!", status: true });
    }

    try {
      const data = await fetchWrapper("/user/authenticate", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          email: user.email,
          password: user.password
        })
      });
      setErrorLabel({ ...errorLabel, status: false });
      console.log("Post Success: ", data);
      setUser(data.user);
      setLoginState(true);
    } catch (err) {
      setErrorLabel({ ...errorLabel, message: String(err), status: true });
    }
  }

  console.log(errorLabel);


  return (
    <>
      <div style={{ position: "relative", marginTop: 40, marginLeft: "auto", marginRight: "auto" }}>
        <Input placeholder="E-mail" type="email" label="E-mail" id="email" onChange={onInputChange} />
        <Input placeholder="Palavra-passe" type="password" label="Palavra-passe" id="password" onChange={onInputChange} />
        <ErrorLabel visible={errorLabel.status}>{errorLabel.message}</ErrorLabel>
        <div style={{ position: "relative", marginTop: 15, marginLeft: "auto", marginRight: "auto", width: "45%" }}>
          <Button
            variant="primary"
            size="200px"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onLoginClick}
          >
            Login
          </Button>
          <Link onClick={noAccountClick} >Não tem conta?</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
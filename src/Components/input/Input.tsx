
import React, { FC, useEffect } from 'react';
import { InputField, InputGroup, InputLabel } from './styles-input';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const Input: FC<InputProps> = ({ id, label, ...rest }) => {

  return (
    <InputGroup>
      <InputLabel htmlFor={id} >{label}</InputLabel>
      <InputField id={id} {...rest} />
    </InputGroup>
  );
};

export default Input;
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

interface RadioButtonProps {
  backgroundColor: string;
  selected?: boolean;
}

const radioButtonHover = keyframes`
  0% { background-color: rgba(244, 238, 255, 0.50)}
  100% { background-color: rgba(244, 238, 255) }
`;

export const RadioButtonTT = styled(motion.button) <RadioButtonProps>`
  border-radius: 10px;
  border: none;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  -webkit-appearance: none;
  color:${prop => prop.selected ? "white" : "#7267cb"} ;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: "Noto Sans", sans-serif;
  letter-spacing: 0.5px;
  line-height: 1.85em;
  height: auto;
  width: auto;
  margin-bottom: 25px;
  background-color: ${prop => prop.backgroundColor};
  /* background-color: rgba(77, 150, 255); */
  &:hover {
    animation: ${radioButtonHover}
    0.4s forwards;
    color: #7267cb;
  }
  &:disabled {
    pointer-events: none;
    background-color: #8d8daa;
  }
  @media (min-width: 500px) {
    width: auto;
  }
`;
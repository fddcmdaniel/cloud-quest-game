import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

interface ButtonProps {
  variant?: string;
  size?: string;
}

const buttonHoverDanger = keyframes`
  0% { background-color: rgba(235, 83, 83) }
  100% { background-color: rgba(184, 64, 94) }
`;

const buttonHoverPrimary = keyframes`
  0% { background-color: rgba(77, 150, 255) }
  100% { background-color: rgba(84, 99, 255) }
`;

export const Button = styled(motion.button) <ButtonProps>`
  border-radius: 10px;
  border: none;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  -webkit-appearance: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  height: 45px;
  width: ${prop => prop.size ? prop.size : "auto"};
  ${prop => {
    switch (prop.variant) {
      case "primary":
        return `
          background-color: rgba(77, 150, 255);
        `;
      case "danger":
        return `
          background-color: rgba(235, 83, 83);
        `;
      default:
        return `
          background-color: yellow;
        `;
    }
  }}
  &:hover {
    animation: ${prop =>
    prop.variant === "danger" ? buttonHoverDanger : null ||
      prop.variant === "primary" ? buttonHoverPrimary : null
  }
    0.4s forwards;
  }
  @media (min-width: 500px) {
    width: ${prop => prop.size ? prop.size : "auto"};
  }
`;
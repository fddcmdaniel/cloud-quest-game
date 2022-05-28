import { motion } from 'framer-motion';
import styled from 'styled-components';

import backgroundImage from './assets/img/main-bg.svg';

export interface ButtonProps {
  marginLeft: string;
  marginTop: string;
  borderColor: string;
  backgroundColor: string;
  backgroundColor_hover: string;
  backgroundColor_focus: string;
  backgroundColor_active: string;
}

export interface BadgeProps {
  marginLeft: string;
  marginTop: string;
}

export const ButtonBadgeProps: BadgeProps[] = [
  {
    marginLeft: "79.09%",
    marginTop: "35.15%"
  },
  {
    marginLeft: "26.9%",
    marginTop: "34%"
  },
  {
    marginLeft: "14.25%",
    marginTop: "4.2%"
  },
  {
    marginLeft: "66.15%",
    marginTop: "1.25%"
  },
  {
    marginLeft: "49.25%",
    marginTop: "17.8%"
  },
]

export const ButtonLevelProps: ButtonProps[] = [
  {
    marginLeft: "80%",
    marginTop: "37%",
    borderColor: "#ff8337",
    backgroundColor: "#ffcc00",
    backgroundColor_hover: "rgba(255, 131, 55, 0.8)",
    backgroundColor_focus: "#ffcc00",
    backgroundColor_active: "rgba(255, 131, 55, 0.4)"
  },
  {
    marginLeft: "27.7%",
    marginTop: "35.8%",
    borderColor: "#5bebf3",
    backgroundColor: "#06a0ff",
    backgroundColor_hover: "rgba(6, 160, 255, 0.8)",
    backgroundColor_focus: "#06a0ff",
    backgroundColor_active: "rgba(6, 160, 255, 0.1)"
  },
  {
    marginLeft: "15%",
    marginTop: "6%",
    borderColor: "#459df4",
    backgroundColor: "#083982",
    backgroundColor_hover: "rgba(8, 57, 130, 0.8)",
    backgroundColor_focus: "#083982",
    backgroundColor_active: "rgba(8, 57, 130, 0.1)"
  },
  {
    marginLeft: "67%",
    marginTop: "3%",
    borderColor: "#827397",
    backgroundColor: "#363062",
    backgroundColor_hover: "rgba(54, 48, 98, 0.8)",
    backgroundColor_focus: "#363062",
    backgroundColor_active: "rgba(54, 48, 98, 0.3)"
  },
  {
    marginLeft: "47.3%",
    marginTop: "14.2%",
    borderColor: "#ec99f1",
    backgroundColor: "#61caf4",
    backgroundColor_hover: "rgba(97, 203, 244, 0.8)",
    backgroundColor_focus: "#61caf4",
    backgroundColor_active: "rgba(97, 203, 244, 0.3)"
  }
];

// Main contair of app
export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #282c34;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  background-image: url("${backgroundImage}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

export const LevelButton = styled(motion.button) <ButtonProps>`
  width: 75px;
  height: 75px;
  position: absolute;
  margin-left: ${prop => prop.marginLeft};
  margin-top: ${prop => prop.marginTop};
  outline-style: none;
  color: #fdfdfd;
  font-family: "Noto Sans", sans-serif;
  font-size: 30px;
  font-weight: bolder;
  border: 6px solid;
  border-color: ${prop => prop.borderColor}; 
  border-radius: 100px;
  cursor: pointer;
  background-color: ${prop => prop.backgroundColor};
  &:hover {
    background-color: ${prop => prop.backgroundColor_hover};
    background-image: none;
  }
  &:focus {
    background-color: ${prop => prop.backgroundColor_focus};
  }
  &:active {
    background-color: ${prop => prop.backgroundColor_active};
  }
`;

export const BadgeButton = styled.div <BadgeProps>`
  position: absolute;
  margin-left: ${prop => prop.marginLeft};
  margin-top: ${prop => prop.marginTop};
`;
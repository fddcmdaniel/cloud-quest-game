import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";

import WelcomeHelper from '../../assets/img/helper/hi.svg';
import LoseHelperBg from '../../assets/img/helper/lose-bg.svg';
import LoseHelper from '../../assets/img/helper/lose.svg';
import WinHelperBg from '../../assets/img/helper/win-bg.svg';
import WinHelper from '../../assets/img/helper/win.svg';

interface ICarouselSlide {
  active?: boolean;
}

interface CarouselProps {
  currentSlide: number;
}

export const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  padding: 20px;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: "Noto Sans", sans-serif;
  text-align: center;
  color: #5d3fd3;
`;

export const Title = styled(motion.div)`
  font-size: 30px;
  font-weight: bold;
  color: #3a2784;
  margin-bottom: 40px;
`;

export const Description = styled.div`
  font-size: 18px;
  font-family: "Noto Sans", sans-serif;
  letter-spacing: 0.5px;
  line-height: 1.85em;
  padding-left: 10%;
  padding-right: 10%;
`;


const float = keyframes`
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); } 
`;

const shake = keyframes`
  10%, 90% {transform: translate3d(-1px, 0, 0)}
  20%, 80% {transform: translate3d(2px, 0, 0)}
  30%, 40% {transform: translate3d(-3px, 0, 0)}
  30%, 50%, 70% {transform: translate3d(-4px, 0, 0)}
  40%, 60% {transform: translate3d(4px, 0, 0)}
`;

export const Helper = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  margin-left: 12%;
  margin-top: 21.5%;
  background-image: url("${WelcomeHelper}");
  background-repeat: no-repeat;
  animation: ${float} 2s linear infinite;
`;

export const Win = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-image: url("${WinHelper}");
  background-repeat: no-repeat;
  animation: ${float} 2s linear infinite;
`;

export const Lose = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-image: url("${LoseHelper}");
  background-repeat: no-repeat;
  animation: ${shake} 0.82s cubic-bezier(.36,.07,.19,.97) both;
  animation-delay: 0.5s;
`;

export const WinBg = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-image: url("${WinHelperBg}");
  background-repeat: no-repeat;
`;

export const LoseBg = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-image: url("${LoseHelperBg}");
  background-repeat: no-repeat;
`;

export const CarouselSlide = styled.div<ICarouselSlide>`
  flex: 0 0 auto;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: all 0.5s ease;
  width: 100%;
`;

export const CarouselSlides = styled.div<CarouselProps>`
  display: flex;
  ${props =>
    props.currentSlide &&
    css`
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  transition: all 0.8s ease;
`;

export const Question = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 5.5%;
`;
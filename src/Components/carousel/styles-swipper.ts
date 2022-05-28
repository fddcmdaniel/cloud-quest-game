import styled, { css, keyframes } from "styled-components";

import WelcomeHelper from '../../assets/img/helper/hi.svg';

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

export const NextButton = styled.button`
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  padding: 20px;
  overflow: hidden;
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

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #3a2784;
`;


const float = keyframes`
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); } 
`;

export const Helper = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  bottom: -30px;
  background-image: url("${WelcomeHelper}");
  background-repeat: no-repeat;
  animation: ${float} 2s linear infinite;
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
  margin-bottom: 40px;
`;
import { motion } from "framer-motion";
import styled from "styled-components";

import CloseButtonBg from '../assets/img/close.svg';

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
`;

export const ModalContainer = styled(motion.div)`
  width: 65%;
  height: 65%;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;               
  top: 50%;                        
  left: 50%;                       
  transform: translate(-50%,-50%); 
  border-radius: 12px
`;

export const CloseButton = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
  background-image: url("${CloseButtonBg}");
  z-index: 999;
`;
import { motion } from "framer-motion";
import styled from "styled-components";

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  z-index: 99999;
`;

export const ModalContainer = styled(motion.div)`
  width: 500px;
  height: 65%;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;               
  top: 50%;                        
  left: 50%;                       
  transform: translate(-50%,-50%); 
  border-radius: 12px;
  overflow: hidden;
  z-index: 99999;
`;

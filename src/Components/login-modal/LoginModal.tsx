
import React, { ReactChild } from 'react';
import { ModalContainer, Overlay } from './styles-login-modal';

interface ModalProps {
  handleClose: (e: any) => void;
  children?: ReactChild;
  isOpen: boolean;
}

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 }
};

const containerVariant = {
  initial: { top: "-50%", transition: { type: "spring" } },
  isOpen: { top: "50%" },
  exit: { top: "-50%" }
};

const LoginModal = ({ handleClose, children, isOpen }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <Overlay initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}>
          <ModalContainer variants={containerVariant}>
            {children}
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default LoginModal;
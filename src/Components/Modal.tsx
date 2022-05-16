
import React, { ReactChild } from 'react';
import { CloseButton, ModalContainer, Overlay } from './styles-modal';

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

const Modal = ({ handleClose, children, isOpen }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <Overlay initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}>
          <ModalContainer variants={containerVariant}>
            <CloseButton onClick={handleClose} />
            {children}
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default Modal;
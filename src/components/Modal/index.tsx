import React from 'react';
// import { FiX } from 'react-icons/fi';

import { Overlay, Container } from './styles';
// import Button from '../Button';

interface Props {
  shown: boolean;
  // hideModal: () => void;
  // title: any;
  // confirmFunction: (event: any) => void;
  // confirmButtonText?: string;
  // confirmButtonVariant?: 'primary' | 'secondary' | 'terciary' | 'quartiary';
  // confirmButtonColor?: '' | 'success' | 'danger';
  // showCancelButton?: boolean;
  // cancelButtonText?: string;
  // cancelButtonVariant?: 'primary' | 'secondary' | 'terciary' | 'quartiary';
  // cancelButtonColor?: '' | 'success' | 'danger';
}

const Modal: React.FC<Props> = ({
  children,
  shown,
  // title,
  // hideModal,
  // confirmFunction,
  // confirmButtonText,
  // confirmButtonVariant,
  // confirmButtonColor,
  // showCancelButton,
  // cancelButtonText,
  // cancelButtonVariant,
  // cancelButtonColor,
}) => {
  return (
    <Overlay shown={shown}>
      <Container>{children}</Container>
    </Overlay>
  );
};

export default Modal;

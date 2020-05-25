import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant, ...rest }) => (
  <Container type="button" variant={variant} {...rest}>
    {children}
  </Container>
);

export default Button;

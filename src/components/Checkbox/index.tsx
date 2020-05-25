import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...rest }) => {
  return (
    <Container label={label}>
      <input type="checkbox" name="" id="" {...rest} />
      {label}
    </Container>
  );
};

export default Checkbox;

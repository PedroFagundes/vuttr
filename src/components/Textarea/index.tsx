import React, {
  InputHTMLAttributes,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';

import { Container, Label } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  required?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
}

const TextInput: React.FC<InputProps> = ({
  name,
  label,
  required,
  icon: Icon,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <>
      {label && (
        <Label>
          {label} {required && <span>*</span>}
        </Label>
      )}
      <Container isFocused={isFocused}>
        {Icon && <Icon />}
        <textarea
          type="text"
          name={name}
          {...rest}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          rows={5}
        />
      </Container>
    </>
  );
};

export default TextInput;

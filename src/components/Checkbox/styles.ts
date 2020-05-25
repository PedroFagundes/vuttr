import styled from 'styled-components';

interface CheckboxProps {
  label: string;
}

export const Container = styled.label<CheckboxProps>`
  display: inline-flex;
  align-items: center;

  input {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    background: #f5f4f6;
    border: solid 1px #dedce1;
    border-radius: 3px;
    margin-right: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.5s;

    &:checked {
      font-family: 'feather';
      background: #365df0;
      border-color: #365df0;
      color: #ffffff;
    }

    &:checked::before {
      content: '\\e83f';
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

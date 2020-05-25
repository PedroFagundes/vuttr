import styled, { css } from 'styled-components';

interface InputProps {
  isFocused: boolean;
}

export const Label = styled.label`
  font-weight: 600;

  display: block;
  margin-bottom: 20px;

  span {
    color: #8f8a9b;
  }

  & + div {
    margin-bottom: 40px;
  }
`;

export const Container = styled.div<InputProps>`
  display: flex;
  align-items: center;

  background: #f5f4f6;
  border: solid 1px #ebeaed;
  color: #b1adb9;
  border-radius: 5px;
  padding: 12px 22px;

  ${props =>
    props.isFocused &&
    css`
      background: #ebeaed;
      border-color: #dedce1;
      color: #8f8a9b;
    `}

  svg {
    font-size: 20px;
    margin-left: -8px;
    margin-right: 8px;
  }

  textarea {
    border: 0;
    background: transparent;
    flex: 1;

    resize: none;

    &::placeholder {
      color: #b1adb9;
    }

    ${props =>
      props.isFocused &&
      css`
        &::placeholder {
          color: #8f8a9b;
        }
      `}
  }
`;

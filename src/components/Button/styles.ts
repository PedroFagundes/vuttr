import styled, { css } from 'styled-components';
import { shade, darken } from 'polished';

interface ButtonProps {
  variant?: string;
  color?: string;
}

const handleButtonColor = ({ variant, color }: ButtonProps): {} => {
  switch (variant) {
    case 'secondary':
      switch (color) {
        case 'success':
          return css`
            background: #e7fbf3;

            color: #12db89;

            &:hover {
              background: ${darken(0.05, '#e7fbf3')};
            }

            &:active {
              background: ${darken(0.1, '#e7fbf3')};
            }
          `;
        case 'danger':
          return css`
            background: #feefee;

            color: #f95e5a;

            &:hover {
              background: ${darken(0.05, '#feefee')};
            }

            &:active {
              background: ${darken(0.1, '#feefee')};
            }
          `;
        default:
          return css`
            background: #e1e7fd;

            color: #365df0;

            &:hover {
              background: ${darken(0.05, '#e1e7fd')};
            }

            &:active {
              background: ${darken(0.1, '#e1e7fd')};
            }
          `;
      }
    case 'terciary':
      switch (color) {
        case 'success':
          return css`
            padding: 6px 18px;

            background: #e7fbf3;

            color: #12db89;

            &:hover {
              background: ${darken(0.05, '#e7fbf3')};
            }

            &:active {
              background: ${darken(0.1, '#e7fbf3')};
            }
          `;
        case 'danger':
          return css`
            padding: 6px 18px;

            background: #feefee;

            color: #f95e5a;

            &:hover {
              background: ${darken(0.05, '#feefee')};
            }

            &:active {
              background: ${darken(0.1, '#feefee')};
            }
          `;
        default:
          return css`
            padding: 6px 18px;

            background: #e1e7fd;
            color: #365df0;
          `;
      }
    case 'quartiary':
      switch (color) {
        case 'success':
          return css`
            padding: 0;
            height: 35px;
            background: transparent;

            color: #12db89;
          `;
        case 'danger':
          return css`
            padding: 0;
            height: 35px;
            background: transparent;

            color: #f95e5a;
          `;
        default:
          return css`
            padding: 0;
            height: 35px;
            background: transparent;

            color: #365df0;
          `;
      }
    default:
      switch (color) {
        case 'success':
          return css`
            background: #0dcb7d;
            color: #fff;

            &:hover {
              background: ${shade(0.1, '#0dcb7d')};
            }

            &:active {
              background: ${shade(0.2, '#0dcb7d')};
            }
          `;
        case 'danger':
          return css`
            background: #f95e5a;
            color: #fff;

            &:hover {
              background: ${shade(0.1, '#f95e5a')};
            }

            &:active {
              background: ${shade(0.2, '#f95e5a')};
            }
          `;
        default:
          return css`
            background: #365df0;
            color: #fff;

            &:hover {
              background: ${shade(0.1, '#365df0')};
            }

            &:active {
              background: ${shade(0.2, '#365df0')};
            }
          `;
      }
  }
};

export const Container = styled.button<ButtonProps>`
  height: 50px;
  padding: 14px 26px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;

  ${props =>
    props.disabled &&
    css`
      opacity: 0.3;
      color: #e1e7fd;
      cursor: not-allowed;
    `}

  ${({ variant, color }) => handleButtonColor({ variant, color })}
  }
`;

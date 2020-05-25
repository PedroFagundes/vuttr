import styled from 'styled-components';

interface OverlayProps {
  shown: boolean;
}

export const Overlay = styled.div<OverlayProps>`
  display: ${props => (props.shown ? 'flex' : 'none')};
  opacity: ${props => (props.shown ? 1 : 0)};
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  transition: opacity 5s;

  background: #170c3ae6;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  position: absolute;
  padding: 30px;
  border-radius: 5px;
  background: #fff;

  animation-duration: 0.5s;
  animation-fill-mode: both;

  @keyframes bounceInRight {
    0% {
      opacity: 0;
      transform: translateX(100vw);
    }

    60% {
      opacity: 1;
      transform: translateX(-30px);
    }

    80% {
      transform: translateX(10px);
    }

    100% {
      transform: translateX(0px);
    }
  }

  animation-name: bounceInRight;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    h1 {
      display: flex;
      align-items: center;
      font-size: 28px;
    }

    button {
      background: transparent;
      border: 0;

      color: #8f8a9b;

      &:hover {
        opacity: 0.5;
      }
    }
  }

  section {
    color: #8f8a9b;
    margin-bottom: 30px;
  }

  footer {
    display: flex;
    justify-content: flex-end;

    button + button {
      margin-left: 30px;
    }
  }
`;

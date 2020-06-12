import { shade } from "polished";
import styled, { keyframes } from "styled-components";
import SignInImage from "../../assets/sign-in-background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Background = styled.div`
  flex: 1;
  background: url(${SignInImage}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #312e38;
      display: block;
      margin-top: 24px;
      transition: 0.5s;

      &:hover {
        color: ${shade(0.2, "#666")};
      }
    }
  }

  > a {
    color: #ff9000;
    display: flex;
    align-items: center;
    margin-top: 24px;
    transition: 0.5s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, "#ff9000")};
    }
  }
`;

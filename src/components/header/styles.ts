import styled from "styled-components";

interface ContainerProps {
  size?: "small" | "large";
}

export const Container = styled.div<ContainerProps>`
  background: #f5f5f5;
  header {
    margin-top: 16px;
    width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    nav {
      a {
        color: #606060;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        svg {
          margin-top: 1px;
          margin-right: 7px;
        }
        & + a {
          margin-left: 32px;
        }
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;

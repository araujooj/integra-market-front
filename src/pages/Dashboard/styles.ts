import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div``;

export const Sidebar = styled.div`
  max-width: 240px;
  background: #ff4d29;
  height: 100vh;
  color: #f5f5f5;
  position: absolute;
`;

export const SidebarButtons = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 16px;
  margin-top: 16px;

  button {
    background: #f5f5f5;
    height: 45px;
    border-radius: 6px;
    text-align: left;
    border: 0;
    width: 100%;
    color: #606060;
    transition: 0.5s;

    &:hover {
      background: ${shade(0.2, "#f5f5f5")};
    }

    svg {
      margin-left: 12px;
      margin-right: 22px;
      transform: translateY(2px);
    }
  }
  > button {
    margin-top: 8px;
  }
`;

export const Image = styled.img`
  width: 180px;
  height: 180px;
  align-self: center;
  border-radius: 50%;
  margin-left: 25px;
  margin-top: 20px;
`;

export const MoneyText = styled.h3`
  font-size: 22px;
  margin-left: 17px;

  b {
    font-weight: 600;
  }
`;

import styled from "styled-components";
import { lighten, darken } from "polished";

export const Container = styled.div`
  margin-left: 250px;
`;

export const Title = styled.h3`
  font-size: 24px;
  color: #606060;
  font-weight: bold;
  margin-left: 35px;
  transform: translateY(24px);
`;

export const OrderList = styled.ul`
  margin-top: 45px;
  row-gap: 4%;
  column-gap: 0px;
  max-width: 1200px;
  margin-left: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style-type: none;
  @media (max-width: 945px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 490px) {
    grid-template-columns: repeat(1, 1fr);
  }
  li {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    &:hover figure img {
      opacity: 0.9;
    }
    figure {
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
      max-height: 250px;
      padding-top: 91%;
      text-align: center;
      @media (max-width: 490px) {
        padding-top: 60%;
      }
      img,
      span {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        max-height: 100%;
        margin: auto;
        transition: opacity 150ms ease-in-out;
        color: #606060;
      }
    }
    > strong {
      font-size: 16px;
      line-height: 20px;
      margin-top: 5px;
      margin-bottom: 2%;
      + div {
        display: flex;
        flex-direction: column;
        margin-top: auto;

        > span {
          font-size: 21px;
          color: #606060;
          margin-bottom: 2%;
        }
        a {
          background: #f66f51;
          color: #fff;
          border: 0;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          transition: 180ms ease-in-out;
          &:hover {
            background: ${lighten(0.04, "#F66F51")};
          }
          &:active {
            background: ${darken(0.04, "#F66F51")};
          }
          > div:first-child {
            display: flex;
            align-items: center;
            padding: 12px;
            background: rgba(0, 0, 0, 0.1);
            position: absolute;
            @media (max-width: 680px) {
              position: initial;
            }
            @media (max-width: 490px) {
              position: absolute;
            }
            @media (max-width: 360px) {
              position: initial;
            }
            svg {
              margin: 0 5px;
            }
          }
          > span:nth-child(2) {
            padding: 12px;
            flex: 1;
            text-align: center;
            font-weight: bold;
          }
        }
      }
    }
  }
`;

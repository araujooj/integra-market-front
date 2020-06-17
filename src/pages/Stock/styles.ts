import styled from "styled-components";

export const Container = styled.div`
  margin-left: 250px;
`;

export const AdmContainer = styled.div`
  margin-top: 15%;
`;

export const Title = styled.h3`
  font-size: 24px;
  color: #606060;
  font-weight: bold;
  margin-left: 35px;
  transform: translateY(24px);
`;

export const Row = styled.div`
  flex: 1;
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px;
`;

export const AdmRow = styled.div`
  flex: 1;
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px;
`;

export const InfoCard = styled.div`
  margin-top: 40px;
  width: 330px;
  max-width: 450px;
  box-shadow: 3px 3px #3333;
  border-radius: 15px;

  div {
    background: #fff;
    border-radius: 15px;
    height: 120px;
    width: 100%;
    padding: 10px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.3s;

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 8px;
      }
    }

    svg {
      color: #cbcbd6;
      margin-left: auto;
    }
  }
`;

export const AdmButton = styled.div`
  margin-top: 40px;
  width: 45%;
  border-radius: 15px;

  a {
    background: #fff;
    border-radius: 15px;
    box-shadow: 3px 3px #3333;
    height: 120px;
    width: 100%;
    padding: 10px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.3s;

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 8px;
      }
    }

    svg {
      color: #cbcbd6;
      margin-left: auto;
    }
  }
`;

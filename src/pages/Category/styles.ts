import styled from "styled-components";

export const Container = styled.div`
  margin-left: 250px;
`;

export const CategoryContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Title = styled.h3`
  margin-left: 16px;
  font-size: 24px;
  color: #606060;
  font-weight: bold;
  transform: translateY(24px);
`;

export const CategoryBtn = styled.div`
  margin-top: 40px;
  width: 180px;
  border-radius: 15px;
  margin-left: 17px;
  margin-right: 18px;

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
      width: 22px;
      height: 22px;
      border-radius: 50%;
    }

    div {
      margin: 16px;
      flex: 1;
      strong {
        font-size: 16px;
        color: #3d3d4d;
      }
    }

    svg {
      color: #cbcbd6;
      margin-left: auto;
    }
  }
`
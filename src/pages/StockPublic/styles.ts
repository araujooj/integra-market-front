import styled from "styled-components";

export const Container = styled.div`
  margin-left: 250px;
`;

export const Title = styled.h3`
  font-size: 24px;
  color: #606060;
  font-weight: bold;
  margin-left: 16px;
  transform: translateY(24px);
`;

export const TableContainer = styled.section`
  height: 95vh;
  max-height: 95vh;
  position: relative;

  table {
    width: 100%;
    border-spacing: 0 8px;
    overflow: scroll;
    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;

      &.title {
        color: #363f5f;
      }

      &.income {
        color: #12a454;
      }

      &.outcome {
        color: #e83f5b;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;

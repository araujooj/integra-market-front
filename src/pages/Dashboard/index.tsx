import React from "react";
import Sidebar from "../../components/sidebar";

import { Container, Title } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Container>
        <Title> Pedidos para organizar </Title>
      </Container>
    </>
  );
};

export default Dashboard;

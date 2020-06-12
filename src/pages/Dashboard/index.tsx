import React from "react";
import { FiShoppingCart, FiBox } from "react-icons/fi";

import { Container, Sidebar, SidebarButtons, Image, MoneyText } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Sidebar>
        <Image
          src="https://s2.glbimg.com/b7zxEWDh3ebRmzRJrnakTvkM_KI=/620x350/e.glbimg.com/og/ed/f/original/2017/09/11/thinkstockphotos-492546162.jpg"
          alt="Supermarket"
        />
        <MoneyText>
          Caixa: <b>R$ 3578,77</b>
        </MoneyText>
        <SidebarButtons>
          <button>
            <FiShoppingCart size={17} /> Pedidos
          </button>
          <button>
            <FiBox size={17} /> Estoque
          </button>
        </SidebarButtons>
      </Sidebar>
      Pedidos
    </Container>
  );
};

export default Dashboard;

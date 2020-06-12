import React, { useState, useEffect } from "react";
import { FiShoppingCart, FiBox } from "react-icons/fi";
import { Link } from "react-router-dom";
import api, { DEVELOPMENT_URL } from "../../services/api";

import {
  Container,
  SidebarButtons,
  Image,
  MoneyText,
  ImageButton,
} from "./styles";
import { useAuth } from "../../hooks/AuthContext";

const Sidebar: React.FC = () => {
  const [avatar, setAvatar] = useState("");
  const { market } = useAuth();

  useEffect(() => {
    getImage(market.avatar);
  }, [getImage]);

  async function getImage(avatarFile: string | null): Promise<void> {
    try {
      const avatarRequested = await api.get(`/files/${avatarFile}`);
      setAvatar(`${DEVELOPMENT_URL}${avatarRequested.config.url}`);
    } catch (err) {
      setAvatar(
        "https://s2.glbimg.com/b7zxEWDh3ebRmzRJrnakTvkM_KI=/620x350/e.glbimg.com/og/ed/f/original/2017/09/11/thinkstockphotos-492546162.jpg"
      );
    }
  }

  return (
    <Container>
      <ImageButton>
        <Image src={avatar} alt="Supermarket" />
      </ImageButton>
      <MoneyText>
        Caixa: <b>R$ 3578,77</b>
      </MoneyText>
      <SidebarButtons>
        <Link to="/dashboard">
          <button>
            <FiShoppingCart size={17} /> Pedidos
          </button>
        </Link>

        <Link to="/stock">
          <button>
            <FiBox size={17} /> Estoque
          </button>
        </Link>
      </SidebarButtons>
    </Container>
  );
};

export default Sidebar;

import React from "react";
import { FaFileImport, FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import Logo from "../../assets/logo.svg";

interface HeaderProps {
  size?: "small" | "large";
}

const Header: React.FC<HeaderProps> = ({ size = "small" }: HeaderProps) => (
  <Container size={size}>
    <header>
      <h3> Estoque público </h3>
      <nav>
        <Link to="/">
          <FaList color="#606060" size={12} />
          Lista
        </Link>
        <Link to="/import">
          <FaFileImport color="#606060" size={12} />
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;

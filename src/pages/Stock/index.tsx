import React from "react";
import Sidebar from "../../components/sidebar";
import { FiChevronRight } from "react-icons/fi";
import {
  Container,
  Title,
  InfoCard,
  Row,
  AdmButton,
  AdmRow,
  AdmContainer,
} from "./styles";
import DatabaseIcon from "../../assets/database.png";
import Lock from "../../assets/lock.png";
import Category from "../../assets/category.png";
import PublicIcon from "../../assets/public icon.png";
import PrivateIcon from "../../assets/private icon.png";
import { Link } from "react-router-dom";

const Stock: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Container>
        <Title>Seu estoque</Title>

        <Row>
          <InfoCard>
            <div>
              <img alt={"jkNDKASJND"} src={DatabaseIcon} />
              <div>
                <strong> 15,533 itens públicos </strong>
              </div>
            </div>
          </InfoCard>
          <InfoCard>
            <div>
              <img alt={"jkNDKASJND"} src={Lock} />
              <div>
                <strong> 5,533 itens privados </strong>
              </div>
            </div>
          </InfoCard>
          <InfoCard>
            <div>
              <img alt={"jkNDKASJND"} src={Category} />
              <div>
                <strong> 27 seções </strong>
              </div>
            </div>
          </InfoCard>
        </Row>

        <AdmContainer>
          <Title>Administrar </Title>

          <AdmRow>
            <AdmButton>
              <Link to="/stock/categories">
                <img alt={"jkNDKASJND"} src={PublicIcon} />
                <div>
                  <strong> Estoque Público </strong>
                </div>

                <FiChevronRight size={20} />
              </Link>
            </AdmButton>

            <AdmButton>
              <Link to="/stock/private">
                <img alt={"jkNDKASJND"} src={PrivateIcon} />
                <div>
                  <strong> Estoque Privado </strong>
                </div>

                <FiChevronRight size={20} />
              </Link>
            </AdmButton>
          </AdmRow>
        </AdmContainer>
      </Container>
    </>
  );
};

export default Stock;

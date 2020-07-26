import React, { useCallback, useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import { useAuth } from "../../hooks/AuthContext";
import api from "../../services/api";
import { CategoryBtn, CategoryContainer, Container, Title } from "./styles";

interface Category {
  id: string;
  title: string;
}

const Category: React.FC = () => {
  const { market } = useAuth();
  const [category, setCategory] = useState<Category[]>([]);

  const loadCategories = useCallback(async () => {
    const response = await api.get(`category/public/${market.id}`);
    setCategory(response.data);
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <>
      <Sidebar />

      <Container>
        <Title> Seções Públicas </Title>
        <CategoryContainer>
          <CategoryBtn>
            <Link to="/stock/public">
              <div>
                <strong> Todas as seções </strong>
              </div>
              <FiChevronRight size={20} />
            </Link>
          </CategoryBtn>

          {category.map((category) => (
            <CategoryBtn key={category.id}>
              <Link to={`/stock/public/${category.id}`}>
                <div>
                  <strong> {category.title} </strong>
                </div>
                <FiChevronRight size={20} />
              </Link>
            </CategoryBtn>
          ))}
        </CategoryContainer>
      </Container>
    </>
  );
};

export default Category;

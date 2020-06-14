import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import api from "../../services/api";
import Sidebar from "../../components/sidebar";

import Header from "../../components/header";
import { Container, Title, TableContainer } from "./styles";
import formatValue from "../../utils/formatValue";
import { useAuth } from "../../hooks/AuthContext";

interface Product {
  id: string;
  name: string;
  price: number;
  created_at: Date;
  formattedValue: number;
  category: {
    title: string;
  };
}

const StockPublic: React.FC = () => {
  const { market } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = useCallback(async () => {
    const response = await api.get(`products/public/${market.id}`);
    const data = response.data.map((product: Product) => ({
      ...product,
      formattedValue: formatValue(product.price),
      created_at: moment(product.created_at).format("lll"),
    }));
    setProducts(data);
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);
  return (
    <>
      <Sidebar />
      <Container>
        <Header> Estoque público DJNKASNJKDAS ASDJKNAKJDJKAS</Header>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Data de criação</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="title">{product.name}</td>
                  <td className={"income"}>{product.formattedValue}</td>
                  <td>{product.category.title}</td>
                  <td>{product.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default StockPublic;

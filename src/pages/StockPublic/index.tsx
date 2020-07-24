import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { useRouteMatch } from 'react-router-dom';
import Sidebar from "../../components/sidebar";
import { useAuth } from "../../hooks/AuthContext";
import api from "../../services/api";
import formatValue from "../../utils/formatValue";
import { Container, TableContainer } from "./styles";


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

interface CategoryParams { 
  category :string;
}

const StockPublic: React.FC = () => {
  const { market } = useAuth();
  const { params } = useRouteMatch<CategoryParams>();
  console.log(params)
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

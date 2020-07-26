import React, { useCallback, useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { CustomerApi } from "../../services/api";
import Sidebar from "../../components/sidebar";

import { Container, TableContainer, Head } from "./styles";

interface OrderParams {
  id: string;
}

interface Order {
  id: string;
  username: string;
  address: string;
  products: Product[];
  subtotal: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
  created_at: Date;
  priceFormatted: number;
  category: {
    title: string;
  };
  quantity: number;
}

const Order: React.FC = () => {
  const { params } = useRouteMatch<OrderParams>();
  const [order, setOrder] = useState<Order>({} as Order);
  const [products, setProducts] = useState<Product[]>([]);

  const loadOrder = useCallback(async () => {
    const response = await CustomerApi.get(`orders/${params.id}`);

    setOrder(response.data);
    setProducts(response.data.products);
  }, []);

  useEffect(() => {
    loadOrder();
  }, [loadOrder]);

  return (
    <>
      <Sidebar />
      <Container>
        <Head>
          <span>Cliente - {order.username}</span>
          <span>Forma de pagamento - Dinheiro</span>
          <span>Local de entrega - {order.address}</span>
          <span>Total do pedido - {order.subtotal}</span>
        </Head>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="title">{product.name}</td>
                  <td className={"income"}>{product.priceFormatted}</td>
                  <td>{product.category.title}</td>
                  <td>{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Order;

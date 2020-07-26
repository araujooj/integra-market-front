import React, { useEffect, useState, useMemo } from "react";
import Loader from "react-loader-spinner";
import Sidebar from "../../components/sidebar";
import { CustomerApi } from "../../services/api";
import GridPlaceholder from "../../components/GridPlaceholder";
import { Container, Title, OrderList } from "./styles";
import { FiShoppingCart, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

interface Products {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface Orders {
  id: string;
  username: string;
  address: string;
  products: Products[];
  totalItens: number;
}

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<Orders[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await CustomerApi.get(`orders`);
      setOrders(response.data);
    }
    loadProducts();
    setLoading(false);
  }, []);

  return (
    <>
      <Sidebar />
      <Container>
        <Title> Pedidos para organizar </Title>

        <OrderList>
          {loading ? (
            <GridPlaceholder repeatCount={6} />
          ) : (
            orders.map((order) => (
              <li key={order.id}>
                <strong>{order.username}</strong>

                <div>
                  <span>{order.address}</span>
                  <span>{order.totalItens} Produtos</span>

                  <Link to={`/orders/${order.id}`}>
                    {loading ? (
                      <Loader type="Oval" color="#FFF" height={16} width={24} />
                    ) : (
                      <div>
                        <FiChevronRight size={16} color="#FFF" />
                      </div>
                    )}

                    <span>Ver os detalhes</span>
                  </Link>
                </div>
              </li>
            ))
          )}
        </OrderList>
      </Container>
    </>
  );
};

export default Dashboard;

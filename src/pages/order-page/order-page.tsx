import React from "react";
import { useParams } from "react-router";
import Order from "../../components/order";

const OrderPage = () => {
  const { orderNumber } = useParams<{ orderNumber: string }>();
  return <Order orderNumber={orderNumber} />;
};

export default OrderPage;

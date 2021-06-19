import React from "react";
import { useParams } from "react-router";
import Order from "../../components/order";
import styles from "./order-page.module.css";

const OrderPage = () => {
  const { orderNumber } = useParams();
  return (
    <div className={styles.main}>
      <Order orderNumber={orderNumber} />
    </div>
  );
};

export default OrderPage;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Done from "../../images/done.png";
import styles from "./order-details.module.css";

const OrderDetails = ({ order }) => {
  const [orderNum, setOrderNum] = useState();

  const postData = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients: order }),
  };

  const postURL = "https://norma.nomoreparties.space/api/orders";

  useEffect(() => {
    const postOrder = async () => {
      try {
        const res = await fetch(postURL, postData);
        if (!res.ok) {
          throw new Error("Response status is not OK");
        }
        const resData = await res.json();
        setOrderNum(resData.order.number);
      } catch (error) {
        console.log(
          "There is a problem with your Fetch request",
          error.message
        );
      }
    };
    postOrder();
  }, []);

  return (
    <div className={styles.main}>
      <span className="text text_type_digits-large mt-4 mb-8">{orderNum}</span>
      <span className="text text_type_main-medium mb-5">
        идентификатор заказа
      </span>
      <img src={Done} className="mt-10 mb-10" alt="done icon" />
      <span className="text text_type_main-default mt-5 mb-2">
        Ваш заказ начали готовить
      </span>
      <span className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </span>
    </div>
  );
};

OrderDetails.propTypes = {
  order: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default OrderDetails;

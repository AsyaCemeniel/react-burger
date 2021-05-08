import React from "react";
import Done from "../../images/done.png";
import styles from "./order-details.module.css";

const OrderDetails = () => {
  return (
    <div className={styles.main}>
      <span className="text text_type_digits-large mt-4 mb-8">034536</span>
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

export default OrderDetails;

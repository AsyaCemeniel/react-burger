import React from "react";
import styles from "./order.module.css";
import { feed } from "../../utils/feed-data";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Order = ({ orderNumber }) => {
  const currentOrder = feed.filter(
    (item) => item.number === parseInt(orderNumber)
  )[0];

  const { name, number, price, date, status, data } = currentOrder;

  const textColor =
    status === "Выполнен"
      ? "#F2F2F3"
      : status === "Готовится"
      ? "#00CCCC"
      : "#E52B1A";
  return (
    <div className={` mb-5 mr-2 ${styles.order}`}>
      <div className={` pb-6 ${styles.number}`}>
        <span className="text text_type_digits-default">#{number}</span>
      </div>
      <div className={`mt-6 pb-6 ${styles.name}`}>
        <span className="text text_type_main-medium">{name}</span>
        <span
          className="text text_type_main-default mt-5"
          style={{ textColor }}
        >
          {status}
        </span>
      </div>
      <div className={`${styles.info}`}>
        <span className="text text_type_main-medium ">Состав:</span>
        <ul className={`mt-6 ${styles.ingredients}`}>
          {data.map((item, index) => (
            <li key={index} className={`mb-4 ${styles.item}`}>
              <div className={`${styles.row}`}>
                <div className={`mr-4 ${styles.ingredient}`}>
                  <img src={item.image_mobile} alt={item.name} />
                </div>
                <span className="text text_type_main-default">{item.name}</span>
              </div>
              <div className={`mr-6 ${styles.price}`}>
                <div className={`text text_type_digits-default mr-2`}>
                  {item.amount} x {item.price}
                </div>
                <CurrencyIcon type="primary" />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={`mt-10 ${styles.date}`}>
        <span className="text text_type_main-default text_color_inactive">
          {date}
        </span>
        <div className={`text text_type_digits-default ${styles.price}`}>
          <div className="mr-2">{price}</div>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default Order;

import React from "react";
import styles from "./order.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router";

import {
  calculateTotalPrice,
  getOrderDate,
  getOrderIngredients,
} from "../../utils";
import Loader from "../loader";

const textColor = {
  done: "#F2F2F3",
  pending: "#00CCCC",
  cancel: "#E52B1A",
};

const Order = ({ orderNumber }) => {
  const isFeed = !!useRouteMatch("/feed");

  let currentOrder;

  const feedOrders = useSelector((state) => state.wsFeed.messages);

  const userOrders = useSelector((state) => state.wsOrders.messages);

  if (isFeed) {
    currentOrder = feedOrders.orders?.find(
      (order) => order.number === +orderNumber
    );
  } else {
    currentOrder = userOrders.orders?.find(
      (order) => order.number === +orderNumber
    );
  }

  const { name, number, createdAt, status, ingredients } = currentOrder;

  const allIngredients = useSelector(
    (store) => store.burgerIngredients.ingredients
  );

  const orderIngredients = getOrderIngredients(allIngredients, ingredients);

  const date = getOrderDate(createdAt);
  const price = calculateTotalPrice(orderIngredients);

  const orderIngredientsSet = orderIngredients?.filter(
    (ingredient, index) => orderIngredients.indexOf(ingredient) === index
  );

  if (!ingredients) {
    return <Loader />;
  }

  return (
    <div className={` mb-5 mr-2 ${styles.order}`}>
      <div className={` pb-6 ${styles.number}`}>
        <span className="text text_type_digits-default">#{number}</span>
      </div>
      <div className={`mt-6 pb-6 ${styles.name}`}>
        <span className="text text_type_main-medium">{name}</span>
        <span
          className="text text_type_main-default mt-5"
          style={{ color: textColor[status] }}
        >
          {status}
        </span>
      </div>
      <div className={`${styles.info}`}>
        <span className="text text_type_main-medium ">Состав:</span>
        <ul className={`mt-6 ${styles.ingredients}`}>
          {orderIngredientsSet?.map((item, index) => (
            <li key={index} className={`mb-4 ${styles.item}`}>
              <div className={`${styles.row}`}>
                <div className={`mr-4 ${styles.ingredient}`}>
                  <img src={item.image_mobile} alt={item.name} />
                </div>
                <span className="text text_type_main-default">{item.name}</span>
              </div>
              <div className={`mr-6 ${styles.price}`}>
                <div className={`text text_type_digits-default mr-2`}>
                  {item.count} x {item.price}
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

//TODO propsTypes

export default Order;

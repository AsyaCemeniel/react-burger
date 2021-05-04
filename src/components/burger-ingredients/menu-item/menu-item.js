import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from "./menu-item.module.css";

const MenuItem = ({ product }) => {
  return (
    <div className={` mr-3 ml-3 mb-8 ${styles.item}`}>
      {product.__v > 0 && <Counter count={product.__v} size="small" />}
      <img src={product.image} alt={product.name} className="mr-4 mb-1 ml-4" />
      <p className={`text text_type_digits-default ${styles.price}`}>
        {product.price}
        <CurrencyIcon type="primary" />
      </p>
      <p
        className={`text text_type_main-default mt-1 pr-1 pb-6 pl-1 ${styles.title}`}
      >
        {product.name}
      </p>
    </div>
  );
};

export default MenuItem;

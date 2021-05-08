import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from "prop-types";
import styles from "./burger-constructor.module.css";
import OrderDetails from "../order-details";

const BurgerConstructor = ({ products, toggleModal }) => {
  const ingredients = products.filter((product) => product.__v > 0);
  const bun = ingredients.find((product) => product.type === "bun");

  const totalPrice = ingredients.reduce((total, item) => total + item.price, 0);

  const handleClose = () => {};

  const order = <OrderDetails />;
  const openModal = () => {
    toggleModal(order);
  };

  return (
    <section className={`ml-5  ${styles.section}`}>
      <div className={styles.main}>
        <ConstructorElement
          text={bun.name}
          type="top"
          thumbnail={bun.image_mobile}
          price={bun.price}
          isLocked={true}
        />
        <ul className={`mt-4 mb-2 ${styles.scroll}`}>
          {ingredients
            .filter((item) => item.type !== "bun")
            .map((item) => (
              <li key={item._id} className={styles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  thumbnail={item.image_mobile}
                  price={item.price}
                  isLocked={false}
                  handleClose={handleClose}
                />
              </li>
            ))}
        </ul>
        <ConstructorElement
          text={bun.name}
          type="bottom"
          thumbnail={bun.image_mobile}
          price={bun.price}
          isLocked={true}
        />
      </div>
      <div className={`m-5 pr-4 ${styles.total_order}`}>
        <span className="text text_type_digits-medium pr-10">
          {totalPrice} <CurrencyIcon type="primary" />
        </span>
        <Button type="primary" size="large" onClick={openModal}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      __v: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default BurgerConstructor;

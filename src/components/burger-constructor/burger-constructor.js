import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from "./burger-constructor.module.css";

const BurgerConstructor = ({ products }) => {
  const ingredients = products.filter((product) => product.__v > 0);
  const bun = ingredients.find((product) => product.type === "bun");

  const totalPrice = ingredients.reduce((total, item) => total + item.price, 0);

  const handleClose = () => {};

  return (
    <section className={styles.section}>
      <div className={styles.main}>
        <ConstructorElement
          text={bun.name}
          type="top"
          thumbnail={bun.image_mobile}
          price={bun.price}
          isLocked={true}
        />
        <div className={`mt-2 mb-2 ${styles.scroll}`}>
          {ingredients
            .filter((item) => item.type !== "bun")
            .map((item) => (
              <div className={styles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                  key={item._id}
                  text={item.name}
                  thumbnail={item.image_mobile}
                  price={item.price}
                  isLocked={false}
                  handleClose={handleClose}
                />
              </div>
            ))}
        </div>
        <ConstructorElement
          text={bun.name}
          type="bottom"
          thumbnail={bun.image_mobile}
          price={bun.price}
          isLocked={true}
        />
      </div>
      <div className={`m-5 pr-3 ${styles.total_order}`}>
        <span className="text text_type_digits-default pr-5">
          {totalPrice} <CurrencyIcon type="primary" />
        </span>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;

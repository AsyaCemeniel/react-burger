import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC } from "react";
import styles from "./menu-item.module.css";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { IngredientType, IngredientWithKeyType } from "../../../types";

const MenuItem: FC<IngredientType> = (menuItem) => {
  const { burgerStuffing, bun } = useSelector(
    (store: any) => store.burgerConstructor
  );

  const getItemCount = () => {
    if (menuItem.type === "bun") {
      return bun._id === menuItem._id ? 1 : 0;
    }
    return burgerStuffing.reduce(
      (count: number, item: IngredientWithKeyType) => {
        return item.item._id === menuItem._id ? ++count : count;
      },
      0
    );
  };

  const count = getItemCount();

  const [{ isDrop }, dragRef] = useDrag({
    type: "ingredient",
    item: menuItem,
    collect: (monitor) => ({
      isDrop: monitor.didDrop(),
    }),
  });

  return (
    <div className={` mr-3 ml-3 mb-8 ${styles.item}`} ref={dragRef}>
      {count > 0 && <Counter count={count} size="small" />}
      <img
        src={menuItem.image}
        alt={menuItem.name}
        className="mr-4 mb-1 ml-4"
      />
      <p className={`text text_type_digits-default ${styles.price}`}>
        {menuItem.price}
        <CurrencyIcon type="primary" />
      </p>
      <p
        className={`text text_type_main-default mt-1 pr-1 pb-6 pl-1 ${styles.title}`}
      >
        {menuItem.name}
      </p>
    </div>
  );
};

export default MenuItem;

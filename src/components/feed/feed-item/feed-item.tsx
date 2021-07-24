import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC } from "react";
import styles from "./feed-item.module.css";
import {
  calculateTotalPrice,
  getOrderDate,
  getOrderIngredients,
} from "../../../utils";
import { useSelector } from "../../../hooks";
import { FeedPropsType } from "./types";
import { IngredientType } from "../../../types";

const textColor = {
  done: "#00CCCC",
  pending: "#F2F2F3",
  cancel: "#E52B1A",
};

const FeedItem: FC<FeedPropsType> = ({ item, isStatus }) => {
  const { ingredients, status, name, createdAt, number } = item;

  const allIngredients = useSelector(
    (store) => store.burgerIngredients.ingredients
  );

  const itemIngredients = getOrderIngredients(allIngredients, ingredients);

  const date = getOrderDate(createdAt);
  const price = calculateTotalPrice(itemIngredients);

  const maxAmount = 5;

  return (
    <div className={` mb-5 mr-2 ${styles.feed_item}`}>
      <div className={` p-6 ${styles.numbers}`}>
        <span className="text text_type_digits-default">#{number}</span>
        <span className="text text_type_main-default text_color_inactive">
          {date}
        </span>
      </div>
      <div className={` pl-6 pb-6 pr-6 ${styles.name}`}>
        <span className="text text_type_main-medium">{name}</span>
        {isStatus && (
          <span
            className="text text_type_main-default"
            style={{ color: textColor[status] }}
          >
            {status}
          </span>
        )}
      </div>
      <div className={`pl-6 pr-6 pb-6 ${styles.info}`}>
        <ul className={`${styles.ingredients}`}>
          {itemIngredients?.map((item: IngredientType, index: number) => {
            const zIndex = maxAmount - index;
            if (index < maxAmount) {
              return (
                <li
                  key={index}
                  className={`${styles.ingredient}`}
                  style={{ zIndex: zIndex }}
                >
                  <img src={item.image_mobile} alt={item.name} />
                </li>
              );
            }
            if (index === maxAmount) {
              return (
                <li
                  key={index}
                  className={`${styles.ingredient}`}
                  style={{ zIndex: zIndex }}
                >
                  <img
                    src={item.image_mobile}
                    alt={item.name}
                    style={{
                      opacity:
                        itemIngredients.length > maxAmount + 1 ? "0.4" : "1",
                    }}
                  />
                  {itemIngredients.length > maxAmount + 1 && (
                    <span>+{itemIngredients.length - index - 1}</span>
                  )}
                </li>
              );
            }
            if (index > maxAmount) return;
          })}
        </ul>
        <div className={`text text_type_digits-default ${styles.price}`}>
          <div className="mr-2">{price}</div>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default FeedItem;

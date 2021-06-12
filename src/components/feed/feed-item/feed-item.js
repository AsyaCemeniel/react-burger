import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from "./feed-item.module.css";

const FeedItem = ({ item, isStatus }) => {
  const { number, date, name, status, data, price } = item;

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
          <span className="text text_type_main-default">{status}</span>
        )}
      </div>
      <div className={`pl-6 pr-6 pb-6 ${styles.info}`}>
        <ul className={`${styles.ingredients}`}>
          {data.map((item, index) => {
            let zIndex = maxAmount - index;
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
                      opacity: data.length > maxAmount + 1 ? "0.4" : "1",
                    }}
                  />
                  {data.length > maxAmount + 1 && (
                    <span>+{data.length - index - 1}</span>
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

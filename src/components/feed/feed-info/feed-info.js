import React from "react";
import styles from "./feed-info.module.css";

const FeedInfo = () => {
  return (
    <div className={` mt-5 mr-5 mb-5 ml-10 ${styles.main}`}>
      <div className={`ml-4 ${styles.info}`}>
        <div className={` ${styles.ready}`}>
          <span className="text text_type_main-medium">Готовы:</span>
          <div
            className={`text text_type_digits-default mt-6 ${styles.numbers} ${styles.color}`}
          >
            <span>034533</span>
            <span>034532</span>
            <span>034530</span>
            <span>034527</span>
            <span>034525</span>
          </div>
        </div>
        <div className={` ml-8 ${styles.preparing}`}>
          <span className="text text_type_main-medium">В работе:</span>
          <div
            className={`text text_type_digits-default mt-6 ${styles.numbers}`}
          >
            <span>034538</span>
            <span>034541</span>
            <span>034542</span>
          </div>
        </div>
      </div>
      <div className={`ml-4 mt-10 ${styles.total}`}>
        <span className="text text_type_main-medium">
          Выполнено за все время:
        </span>
        <span className={`text text_type_digits-large ${styles.light}`}>
          28 752
        </span>
      </div>
      <div className={`ml-4 mt-10 ${styles.total}`}>
        <span className="text text_type_main-medium">
          Выполнено за сегодня:
        </span>
        <span className={`text text_type_digits-large ${styles.light}`}>
          127
        </span>
      </div>
    </div>
  );
};

export default FeedInfo;

import React from "react";
import { useSelector } from "react-redux";
import { divideIntoColumns, sortByStatus } from "../../../utils";
import styles from "./feed-info.module.css";

const FeedInfo = () => {
  const { orders, total, totalToday } = useSelector(
    (store: any) => store.wsFeed.messages || {}
  );

  const statusColumns = sortByStatus(orders);

  const doneColumns = divideIntoColumns(statusColumns?.done);
  const pendingColumns = divideIntoColumns(statusColumns?.pending);

  return (
    <div className={` mt-5 mr-5 mb-5 ml-10 ${styles.main}`}>
      <div className={`ml-4 ${styles.info}`}>
        <div className={` ${styles.ready}`}>
          <span className="text text_type_main-medium">Готовы:</span>
          <div
            className={`text text_type_digits-default mt-2 ${styles.numbers} ${styles.color}`}
          >
            <ul>
              {doneColumns &&
                doneColumns.firstColumn.map((number, index) => (
                  <li key={index}>{number}</li>
                ))}
            </ul>
            <ul>
              {doneColumns &&
                doneColumns.secondColumn.map((number, index) => (
                  <li key={index}>{number}</li>
                ))}
            </ul>
          </div>
        </div>
        <div className={` ml-8 ${styles.preparing}`}>
          <span className="text text_type_main-medium">В работе:</span>
          <div
            className={`text text_type_digits-default mt-2 ${styles.numbers}`}
          >
            <ul>
              {pendingColumns &&
                pendingColumns.firstColumn.map((number, index) => (
                  <li key={index}>{number}</li>
                ))}
            </ul>
            <ul>
              {pendingColumns &&
                pendingColumns.secondColumn.map((number, index) => (
                  <li key={index}>{number}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={`ml-4 mt-3 ${styles.total}`}>
        <span className="text text_type_main-medium">
          Выполнено за все время:
        </span>
        <span className={`text text_type_digits-large ${styles.light}`}>
          {total}
        </span>
      </div>
      <div className={`ml-4 mt-10 ${styles.total}`}>
        <span className="text text_type_main-medium">
          Выполнено за сегодня:
        </span>
        <span className={`text text_type_digits-large ${styles.light}`}>
          {totalToday}
        </span>
      </div>
    </div>
  );
};

export default FeedInfo;

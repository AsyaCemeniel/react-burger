import React, { useEffect } from "react";
import { useDispatch, useSelector } from "../../../hooks";
import { Link, useLocation } from "react-router-dom";
import { wsOrdersActions } from "../../../services/orders-actions";
import { OrderType } from "../../../types";
import FeedItem from "../feed-item";
import styles from "./user-feed.module.css";

const UserFeed = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: wsOrdersActions.wsInit });
    return () => {
      dispatch({ type: wsOrdersActions.wsClose });
    };
  }, [dispatch]);

  const messages = useSelector((store) => store.wsOrders.messages);

  return (
    <section className={`${styles.main}`}>
      <ul className={`${styles.scroll}`}>
        {messages?.orders &&
          messages?.orders.map((item: OrderType, index: number) => (
            <li key={index}>
              <Link
                to={{
                  pathname: `/profile/orders/${item.number}`,
                  state: { background: location },
                }}
                className={styles.link}
              >
                <FeedItem item={item} isStatus={true} />
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default UserFeed;

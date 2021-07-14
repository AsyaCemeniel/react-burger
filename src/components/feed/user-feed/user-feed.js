import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { ActionTypes } from "../../../services/orders-actions";
import FeedItem from "../feed-item";
import styles from "./user-feed.module.css";

const UserFeed = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ActionTypes.INIT_CONNECTION });
    return () => {
      dispatch({ type: ActionTypes.CLOSE_CONNECTION });
    };
  }, [dispatch]);

  const { orders } = useSelector((store) => store.wsOrders.messages);

  return (
    <section className={`${styles.main}`}>
      <ul className={`${styles.scroll}`}>
        {orders &&
          orders.map((item, index) => (
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

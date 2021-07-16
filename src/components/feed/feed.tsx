import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import FeedItem from "./feed-item";
import styles from "./feed.module.css";
import { useSelector } from "react-redux";
import { OrderType } from "../../types";

const Feed = () => {
  const location = useLocation();

  const { orders } = useSelector((store: any) => store.wsFeed.messages || {});

  return (
    <section className={`${styles.main}`}>
      <ul className={`${styles.scroll}`}>
        {orders &&
          orders.map((item: OrderType, index: number) => (
            <li key={index}>
              <Link
                to={{
                  pathname: `/feed/${item.number}`,
                  state: { background: location },
                }}
                className={styles.link}
              >
                <FeedItem item={item} isStatus={false} />
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Feed;

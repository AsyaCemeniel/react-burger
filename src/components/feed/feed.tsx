import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import FeedItem from "./feed-item";
import styles from "./feed.module.css";
import { useSelector } from "../../hooks";
import { OrderType } from "../../types";

const Feed = () => {
  const location = useLocation();

  const messages = useSelector((store) => store.wsFeed.messages);

  return (
    <section className={`${styles.main}`}>
      <ul className={`${styles.scroll}`}>
        {messages?.orders &&
          messages?.orders.map((item: OrderType, index: number) => (
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

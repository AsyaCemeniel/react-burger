import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import FeedItem from "./feed-item";
import styles from "./feed.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "../../services/feed-actions";

const Feed = () => {
  const location = useLocation();

  const { orders } = useSelector((store) => store.wsFeed.messages);

  return (
    <section className={`${styles.main}`}>
      <ul className={`${styles.scroll}`}>
        {orders &&
          orders.map((item, index) => (
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

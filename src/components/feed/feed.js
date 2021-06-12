import React from "react";
import { feed } from "../../utils/feed-data";
import FeedItem from "./feed-item";
import styles from "./feed.module.css";

const Feed = () => {
  return (
    <section className={`${styles.main}`}>
      <ul className={`${styles.scroll}`}>
        {feed.map((item, index) => (
          <li key={index}>
            <FeedItem item={item} isStatus={false} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Feed;

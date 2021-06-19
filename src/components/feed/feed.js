import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { feed } from "../../utils/feed-data";
import FeedItem from "./feed-item";
import styles from "./feed.module.css";

const Feed = ({ isStatus }) => {
  const match = useRouteMatch();
  console.log(match.url);

  return (
    <section className={`${styles.main}`}>
      <ul className={`${styles.scroll}`}>
        {feed.map((item, index) => (
          <li key={index}>
            <Link
              to={{ pathname: `${match.url}/${item.number}` }}
              className={styles.link}
            >
              <FeedItem item={item} isStatus={isStatus} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Feed;

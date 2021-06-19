import React from "react";
import styles from "./feed-page.module.css";
import Feed from "../../components/feed";
import FeedInfo from "../../components/feed/feed-info";

const FeedPage = () => {
  return (
    <div>
      <div className={`text text_type_main-large ${styles.name}`}>
        Лента заказов
      </div>
      <div className={styles.container}>
        <Feed isStatus={false} />
        <FeedInfo />
      </div>
    </div>
  );
};

export default FeedPage;

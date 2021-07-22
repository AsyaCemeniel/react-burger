import React, { useEffect } from "react";
import styles from "./feed-page.module.css";
import Feed from "../../components/feed";
import FeedInfo from "../../components/feed/feed-info";
import { useDispatch } from "../../hooks";
import { wsFeedActions } from "../../services/feed-actions";

const FeedPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: wsFeedActions.wsInit });
    return () => {
      dispatch({ type: wsFeedActions.wsClose });
    };
  }, [dispatch]);

  return (
    <div>
      <div className={`text text_type_main-large ${styles.name}`}>
        Лента заказов
      </div>
      <div className={styles.container}>
        <Feed />
        <FeedInfo />
      </div>
    </div>
  );
};

export default FeedPage;

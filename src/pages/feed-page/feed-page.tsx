import React, { useEffect } from "react";
import styles from "./feed-page.module.css";
import Feed from "../../components/feed";
import FeedInfo from "../../components/feed/feed-info";
import { useDispatch, useSelector } from "../../hooks";
import { wsFeedActions } from "../../services/feed-actions";
import Loader from "../../components/loader";

const FeedPage = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.wsFeed.messages);

  useEffect(() => {
    dispatch({ type: wsFeedActions.wsInit });
    return () => {
      dispatch({ type: wsFeedActions.wsClose });
    };
  }, [dispatch]);

  if (!messages) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Feed />
        <FeedInfo />
      </div>
    </div>
  );
};

export default FeedPage;

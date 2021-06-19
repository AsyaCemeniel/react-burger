import React from "react";
import { Link } from "react-router-dom";
import styles from "./not-found-page.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.notfound_id}>
      <div className={styles.notfound}>
        <div className={styles.notfound_404}>
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <Link to={{ pathname: "/" }}>Главная страница</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

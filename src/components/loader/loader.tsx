import React from "react";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};

export default Loader;

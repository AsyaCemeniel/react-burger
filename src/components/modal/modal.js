import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from "./modal.module.css";

const Modal = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.inside}>
        <CloseIcon type="primary" />

        {props.children}
      </div>
    </section>
  );
};

export default Modal;

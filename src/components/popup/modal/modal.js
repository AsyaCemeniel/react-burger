import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

import styles from "./modal.module.css";

const Modal = (props) => {
  return (
    <div className={styles.container}>
      <div className={`p-10  ${styles.inside}`}>
        <div className={styles.header}>
          <p className="text text_type_main-large pt-3 pb-3">{props.title}</p>
          <CloseIcon onClick={props.onClose} type="primary" />
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;

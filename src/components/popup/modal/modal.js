import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

import styles from "./modal.module.css";

const Modal = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.inside}>
        <p className="text text_type_main-large">{props.title}</p>
        <CloseIcon onClick={props.onClose} type="primary" />
        {props.children}
      </div>
    </div>
  );
};

export default Modal;

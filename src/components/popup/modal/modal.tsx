import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC } from "react";
import { ModalProps } from "./types";
import styles from "./modal.module.css";

const Modal: FC<ModalProps> = ({ children, onClose, title }) => {
  return (
    <div className={styles.container}>
      <div className={`p-10  ${styles.inside}`}>
        <div className={styles.header}>
          <p className="text text_type_main-large pt-3 pb-3">{title}</p>
          <CloseIcon onClick={onClose} type="primary" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

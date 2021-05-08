import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from "prop-types";

import styles from "./modal.module.css";

const Modal = ({ children, onClose, title }) => {
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

Modal.propTypes = {
  children: PropTypes.objectOf(PropTypes.element),
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default Modal;

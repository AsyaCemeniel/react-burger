import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Modal from "./modal";
import ModalOverlay from "./modal-overlay";
import styles from "./popup.module.css";
import { useHistory } from "react-router-dom";

const modalRoot = document.getElementById("modal");

const Popup = ({ children, title }) => {
  const history = useHistory();

  const onClose = () => {
    history.goBack();
  };

  const exitOnEsc = (event) => {
    if (event.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", exitOnEsc);

    return () => {
      document.removeEventListener("keydown", exitOnEsc);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={styles.popup}>
      <Modal onClose={onClose} title={title}>
        {children}
      </Modal>
      <ModalOverlay onClose={onClose} />
    </div>,
    modalRoot
  );
};

Popup.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};

export default Popup;

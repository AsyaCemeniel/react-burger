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

  const modalDiv = document.createElement("div");

  const exitOnEsc = (event) => {
    if (event.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    modalRoot.appendChild(modalDiv);
    document.addEventListener("keydown", exitOnEsc);

    return () => {
      modalRoot.removeChild(modalDiv);
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
    modalDiv
  );
};

// Popup.propTypes = {
//   children: PropTypes.object,
//   onClose: PropTypes.func.isRequired,
//   title: PropTypes.string,
// };

export default Popup;

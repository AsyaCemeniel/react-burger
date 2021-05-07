import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "./modal";
import ModalOverlay from "./modal-overlay";
import styles from "./popup.module.css";

const modalRoot = document.getElementById("modal");

const Popup = (props) => {
  const modalDiv = document.createElement("div");
  useEffect(() => {
    modalRoot.appendChild(modalDiv);

    return () => {
      modalRoot.removeChild(modalDiv);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={styles.popup}>
      <Modal onClose={props.onClose} title={props.title}>
        {props.children}
      </Modal>
      <ModalOverlay onClose={props.onClose} />
    </div>,
    modalDiv
  );
};

export default Popup;

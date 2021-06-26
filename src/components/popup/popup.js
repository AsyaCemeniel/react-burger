import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Modal from "./modal";
import ModalOverlay from "./modal-overlay";
import styles from "./popup.module.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_ORDER, DELETE_ORDER_DETAILS } from "../../services/actions";

const modalRoot = document.getElementById("modal");

const Popup = ({ children, title }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isOrdered } = useSelector((store) => store.order);

  const onClose = () => {
    history.goBack();
    if (isOrdered) {
      dispatch({ type: DELETE_ORDER });
      dispatch({ type: DELETE_ORDER_DETAILS, payload: false });
    }
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

import React, { useEffect, useState } from "react";
import AppHeader from "../app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor";
import styles from "./app.module.css";
import Popup from "../popup";
import { BurgerConstructorProvider } from "../../context/burger-constructor-context";

function App() {
  const [data, setData] = useState({
    ingredients: null,
    loaded: false,
  });

  const [modalData, setModalData] = useState({
    visible: false,
    data: {},
    title: "",
  });

  const toggleModal = (data = {}, title = "") => {
    setModalData({
      visible: !modalData.visible,
      data,
      title,
    });
  };

  return (
    <div>
      <AppHeader />
      <div className={styles.main}>
        <BurgerIngredients toggleModal={toggleModal} />
        <BurgerConstructorProvider>
          <BurgerConstructor toggleModal={toggleModal} />
        </BurgerConstructorProvider>
      </div>
      {modalData.visible && (
        <Popup onClose={toggleModal} title={modalData.title}>
          {modalData.data}
        </Popup>
      )}
    </div>
  );
}

export default App;

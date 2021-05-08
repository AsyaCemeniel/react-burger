import React, { useEffect, useState } from "react";
import AppHeader from "../app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor";
import { products } from "../../utils/data";
import styles from "./app.module.css";
import Popup from "../popup";

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

  const ingredientsURL = "https://norma.nomoreparties.space/api/ingredients";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(ingredientsURL);
        const resData = await res.json();

        setData({
          ...data,
          ingredients: resData.data,
          loaded: true,
        });
      } catch (error) {
        setData({
          ...data,
          loaded: false,
        });
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <AppHeader />
      <div className={styles.main}>
        {data.loaded && (
          <BurgerIngredients
            products={data.ingredients}
            toggleModal={toggleModal}
          />
        )}
        <BurgerConstructor products={products} toggleModal={toggleModal} />
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

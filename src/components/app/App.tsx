import React, { useEffect, useState } from "react";
import AppHeader from "../app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor";
import { products } from "../../utils/data";
import styles from "./app.module.css";
import Modal from "../modal";

function App() {
  const [data, setData] = useState({
    ingredients: null,
    loaded: false,
  });

  const ingredientsURL = "https://norma.nomoreparties.space/api/ingredients";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(ingredientsURL).then(async (res) => {
          const resData = await res.json();
          if (res.ok) {
            setData({
              ...data,
              ingredients: resData.data,
              loaded: true,
            });
          } else {
            throw resData;
          }

          console.log(resData);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <AppHeader />
      <div className={styles.main}>
        {data.loaded && <BurgerIngredients products={data.ingredients} />}
        <BurgerConstructor products={products} />
      </div>
      <Modal />
    </>
  );
}

export default App;

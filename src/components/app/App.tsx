import React from "react";
import AppHeader from "../app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor";
import { products } from "../../utils/data";
import styles from "./app.module.css";

function App() {
  return (
    <>
      <AppHeader />
      <div className={styles.main}>
        <BurgerIngredients products={products} />
        <BurgerConstructor products={products} />
      </div>
    </>
  );
}

export default App;

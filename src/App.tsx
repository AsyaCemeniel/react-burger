import React from "react";
import AppHeader from "./components/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor";
import { products } from "./utils/data";
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

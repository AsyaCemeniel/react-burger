import React from "react";
import AppHeader from "./components/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import { products } from "./utils/data";

function App() {
  return (
    <>
      <AppHeader />
      <BurgerIngredients products={products} />
    </>
  );
}

export default App;

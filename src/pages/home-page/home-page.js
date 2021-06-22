import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor";
import styles from "./home-page.module.css";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();

  return (
    <div className={styles.main}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients location={location} />
        <BurgerConstructor location={location} />
      </DndProvider>
    </div>
  );
};

export default HomePage;

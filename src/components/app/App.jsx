import React, { useState } from "react";
import AppHeader from "../app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor";
import styles from "./app.module.css";
import Popup from "../popup";
import { BurgerConstructorProvider } from "../../context/burger-constructor-context";
import { useDispatch, useSelector } from "react-redux";
import IngredientDetails from "../ingredient-details";
import {
  DELETE_ORDER_DETAILS,
  REMOVE_CURRENT_INGREDIENT,
} from "../../services/actions";
import OrderDetails from "../order-details";

function App() {
  const dispatch = useDispatch();
  const { currentIngredient } = useSelector((store) => store.burgerIngredients);
  const { order, isOrderInvalid } = useSelector((store) => store.order);

  const onCloseModal = () => {
    dispatch({
      type: REMOVE_CURRENT_INGREDIENT,
    });
    dispatch({
      type: DELETE_ORDER_DETAILS,
    });
  };

  const popup = (
    <Popup
      onClose={onCloseModal}
      title={currentIngredient ? "Детали ингредиента" : ""}
    >
      {currentIngredient && <IngredientDetails product={currentIngredient} />}
      {order && !isOrderInvalid && <OrderDetails order={order} />}
      {isOrderInvalid && (
        <div className="text text_type_main-large pb-6">
          <p> Ой! </p>
          <p> В бургере не хватает булки! </p>
        </div>
      )}
    </Popup>
  );

  return (
    <div>
      <AppHeader />
      <div className={styles.main}>
        <BurgerIngredients />
        <BurgerConstructorProvider>
          <BurgerConstructor />
        </BurgerConstructorProvider>
      </div>
      {(currentIngredient || order || isOrderInvalid) && popup}
    </div>
  );
}

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";
import AppHeader from "../app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor";
import styles from "./app.module.css";
import Popup from "../popup";
import { useDispatch, useSelector } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import IngredientDetails from "../ingredient-details";
import {
  DELETE_ORDER_DETAILS,
  REMOVE_CURRENT_INGREDIENT,
} from "../../services/actions";
import OrderDetails from "../order-details";
import HomePage from "../../pages/home-page";
import LoginPage from "../../pages/login-page";
import RegisterPage from "../../pages/register-page";
import ForgotPasswordPage from "../../pages/forgot-password-page";
import ResetPasswordPage from "../../pages/reset-password-page";
import FeedPage from "../../pages/feed-page";

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
        <div
          className={`text text_type_main-medium pb-6  ${styles.error_text}`}
        >
          <p> Ой! </p>
          <p> В бургере не хватает булки! </p>
        </div>
      )}
    </Popup>
  );

  return (
    <div>
      <AppHeader />
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/login" exact={true} component={LoginPage} />
        <Route path="/register" exact={true} component={RegisterPage} />
        <Route
          path="/forgot-password"
          exact={true}
          component={ForgotPasswordPage}
        />
        <Route
          path="/reset-password"
          exact={true}
          component={ResetPasswordPage}
        />
        <Route path="/feed" exact={true} component={FeedPage} />
      </Switch>
      {(currentIngredient || order || isOrderInvalid) && popup}
    </div>
  );
}

export default App;

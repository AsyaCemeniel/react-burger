import React from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import AppHeader from "../app-header";
import styles from "./app.module.css";
import Popup from "../popup";
import IngredientDetails from "../ingredient-details";
import OrderDetails from "../order-details";
import HomePage from "../../pages/home-page";
import LoginPage from "../../pages/login-page";
import RegisterPage from "../../pages/register-page";
import ForgotPasswordPage from "../../pages/forgot-password-page";
import ResetPasswordPage from "../../pages/reset-password-page";
import FeedPage from "../../pages/feed-page";
import NotFoundPage from "../../pages/not-found-page";
import ProfilePage from "../../pages/profile-page";
import OrderPage from "../../pages/order-page";
import ProtectedRoute from "../protected-route";
import ingredientDetails from "../ingredient-details";

function App() {
  let location = useLocation();
  const history = useHistory();

  let background =
    (history.action === "PUSH" || history.action === "REPLACE") &&
    location.state &&
    location.state.background;

  return (
    <div>
      <AppHeader />
      <Switch location={background || location}>
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
        <Route path="/feed/:orderNumber" exact={true} component={OrderPage} />
        <ProtectedRoute path="/profile/orders/:orderNumber" exact={true}>
          <OrderPage />
        </ProtectedRoute>
        <ProtectedRoute path="/profile">
          <ProfilePage />
        </ProtectedRoute>
        <Route
          path="/ingredients/:id"
          exact={true}
          component={ingredientDetails}
        />
        <Route component={NotFoundPage} />
      </Switch>
      {background && (
        <>
          <Route
            path="/ingredients/:id"
            children={
              <Popup title="Детали ингредиента">
                <IngredientDetails />
              </Popup>
            }
          />
          <ProtectedRoute
            path="/profile/orders/:orderNumber"
            children={
              <Popup>
                <OrderPage />
              </Popup>
            }
          />

          <Route
            path="/feed/:orderNumber"
            children={
              <Popup>
                <OrderPage />
              </Popup>
            }
          />
          <ProtectedRoute
            path="/order"
            children={
              <Popup>
                <OrderDetails />
              </Popup>
            }
          />
        </>
      )}
    </div>
  );
}

export default App;

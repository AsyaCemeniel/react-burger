import React from "react";
import styles from "./profile-page.module.css";
import { NavLink, Switch, Route } from "react-router-dom";
import UserProfile from "../../components/user-profile";
import { useDispatch } from "../../hooks";
import { userLogout } from "../../services/user-actions";
import UserFeed from "../../components/feed/user-feed";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <div className={`${styles.main}`}>
      <div className={`pt-6 mr-10 ${styles.menu}`}>
        <NavLink
          exact
          to="/profile"
          className={`text text_type_main-medium text_color_inactive ${styles.nav}`}
          activeClassName={styles.active}
        >
          Профиль
        </NavLink>
        <NavLink
          to="/profile/orders"
          className={`text text_type_main-medium text_color_inactive ${styles.nav}`}
          activeClassName={styles.active}
        >
          История заказов
        </NavLink>
        <NavLink
          exact
          to="/login"
          className={`text text_type_main-medium text_color_inactive ${styles.nav}`}
          activeClassName={styles.active}
          onClick={handleLogout}
        >
          Выход
        </NavLink>
        <div
          className={`text text_type_main-default text_color_inactive ${styles.text}`}
        >
          <span>В этом разделе вы можете</span>
          <span>изменить свои персональные данные</span>
        </div>
      </div>
      <div className={`ml-5 ${styles.content}`}>
        <Switch>
          <Route path="/profile" exact={true} component={UserProfile} />
          <Route path="/profile/orders" exact={true}>
            <UserFeed />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default ProfilePage;

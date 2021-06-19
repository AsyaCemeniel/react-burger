import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import styles from "./app-header.module.css";

const AppHeader = () => {
  const isConstructor = !!useRouteMatch({ path: "/", exact: true });
  const isFeed = !!useRouteMatch("/feed");
  const isProfile = !!useRouteMatch("/profile");

  return (
    <header style={{ backgroundColor: "#1C1C21" }}>
      <nav className={styles.menu}>
        <div className={styles.nav_div}>
          <NavLink
            exact
            to="/"
            activeClassName={styles.active}
            className={`text text_type_main-default mt-4 mr-1 mb-4 ml-1 p-5 `}
          >
            <BurgerIcon type={isConstructor ? "primary" : "secondary"} />{" "}
            Конструктор
          </NavLink>
          <NavLink
            to="/feed"
            activeClassName={styles.active}
            className="text text_type_main-default mt-4 mr-1 mb-4 ml-1 p-5"
          >
            <ListIcon type={isFeed ? "primary" : "secondary"} /> Лента заказов
          </NavLink>
        </div>
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>
        <NavLink
          to="/profile"
          activeClassName={styles.active}
          className="text text_type_main-default mt-4 mr-1 mb-4 ml-1 p-5"
        >
          <ProfileIcon type={isProfile ? "primary" : "secondary"} /> Личный
          кабинет
        </NavLink>
      </nav>
    </header>
  );
};

export default AppHeader;

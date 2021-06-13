import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./app-header.module.css";

const AppHeader = () => {
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
            <BurgerIcon type="primary" /> Конструктор
          </NavLink>
          <NavLink
            to="/feed"
            activeClassName={styles.active}
            className="text text_type_main-default mt-4 mr-1 mb-4 ml-1 p-5"
          >
            <ListIcon type="secondary" /> Лента заказов
          </NavLink>
        </div>
        <a href="#" className={styles.logo}>
          <Logo />
        </a>
        <NavLink
          to="/profile"
          activeClassName={styles.active}
          className="text text_type_main-default mt-4 mr-1 mb-4 ml-1 p-5"
        >
          <ProfileIcon type="secondary" /> Личный кабинет
        </NavLink>
      </nav>
    </header>
  );
};

export default AppHeader;

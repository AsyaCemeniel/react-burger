import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from "./app-header.module.css";

const AppHeader = () => {
  return (
    <header style={{ backgroundColor: "#1C1C21" }}>
      <nav className={styles.menu}>
        <div className={styles.nav_div}>
          <a
            href="#"
            className={`text text_type_main-default mt-4 mr-1 mb-4 ml-1 p-5 ${styles.active}`}
          >
            <BurgerIcon type="primary" /> Конструктор
          </a>
          <a
            href="#"
            className="text text_type_main-default mt-4 mr-1 mb-4 ml-1 p-5"
          >
            <ListIcon type="secondary" /> Лента заказов
          </a>
        </div>
        <a href="#" className={styles.logo}>
          <Logo />
        </a>
        <a
          href="#"
          className="text text_type_main-default mt-4 mr-1 mb-4 ml-1 p-5"
        >
          <ProfileIcon type="secondary" /> Личный кабинет
        </a>
      </nav>
    </header>
  );
};

export default AppHeader;

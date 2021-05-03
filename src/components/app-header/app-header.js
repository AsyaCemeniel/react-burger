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
    <header style={{ backgroundColor: "#1C1C21" }} className=" pt-3 pb-3">
      <nav className={styles.menu}>
        <div className={styles.nav_div}>
          <a
            href="#"
            className={`text text_type_main-default ${styles.active}`}
          >
            <BurgerIcon type="primary" /> Конструктор
          </a>
          <a href="#" className="text text_type_main-default">
            <ListIcon type="secondary" /> Лента заказов
          </a>
        </div>
        <a href="#" className={styles.logo}>
          <Logo />
        </a>
        <a href="#" className="text text_type_main-default mr-4">
          <ProfileIcon type="secondary" /> Личный кабинет
        </a>
      </nav>
    </header>
  );
};

export default AppHeader;

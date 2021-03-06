import React, { useState } from "react";
import MenuItem from "./menu-item";
import Tabs from "../tabs";
import styles from "./burger-ingredients.module.css";
import { useSelector } from "../../hooks";
import { useInView } from "react-intersection-observer";
import { useLocation, Link } from "react-router-dom";
import { IngredientType } from "../../types";

const BurgerIngredients = () => {
  const location = useLocation();

  const [current, setCurrent] = useState<string>("bun");

  const ingredients = useSelector(
    (store) => store.burgerIngredients.ingredients
  );

  const titles = [
    { name: "Булки", key: "1", type: "bun" },
    { name: "Соусы", key: "2", type: "sauce" },
    { name: "Начинки", key: "3", type: "main" },
  ];

  const [bun, bunInView] = useInView({
    threshold: 0.8,
  });

  const [sauce, sauceInView] = useInView({
    threshold: 0.7,
  });

  const [main, mainInView] = useInView({
    threshold: 0.3,
  });

  const handleScroll = () => {
    bunInView && setCurrent("bun");
    sauceInView && !bunInView && setCurrent("sauce");
    mainInView && !sauceInView && setCurrent("main");
  };

  return (
    <section className={styles.container}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <Tabs titles={titles} setCurrent={setCurrent} current={current} />
      <div className={`mt-8 ${styles.scroll_menu}`} onScroll={handleScroll}>
        {titles.map(({ name, key, type }) => {
          const items = ingredients.filter(
            (product: IngredientType) => product.type === type
          );
          return (
            <div
              key={key}
              ref={type === "bun" ? bun : type === "sauce" ? sauce : main}
            >
              <h2 className="text text_type_main-medium mt-2 mb-6">{name}</h2>
              <ul className={`mr-1 ml-1 ${styles.menu}`}>
                {items.map((menuItem: IngredientType) => (
                  <li key={menuItem._id}>
                    <Link
                      to={{
                        pathname: `/ingredients/${menuItem._id}`,
                        state: { background: location },
                      }}
                      className={styles.link}
                    >
                      <MenuItem {...menuItem} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BurgerIngredients;

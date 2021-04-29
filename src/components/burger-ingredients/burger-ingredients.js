import React from "react";
import MenuItem from "./menu-item";
import Tabs from "../tabs";
import styles from "./burger-ingredients.module.css";

const BurgerIngredients = ({ products }) => {
  const titles = [
    { name: "Булки", key: "1", type: "bun" },
    { name: "Соусы", key: "2", type: "sauce" },
    { name: "Начинки", key: "3", type: "main" },
  ];

  return (
    <section className={styles.container}>
      <h1 className="text text_type_main-large mt-5 mb-3">Соберите бургер</h1>
      <Tabs titles={titles} />
      <div className={`mt-5 ${styles.scroll_menu}`}>
        {titles.map(({ name, key, type }) => {
          const items = products.filter((product) => product.type === type);

          return (
            <div key={key}>
              <h2 className="text text_type_main-medium ">{name}</h2>
              <div className={styles.menu}>
                {items.map((item) => (
                  <MenuItem product={item} key={item._id} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BurgerIngredients;

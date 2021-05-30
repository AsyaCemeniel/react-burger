import React, { useEffect } from "react";
import PropTypes from "prop-types";
import MenuItem from "./menu-item";
import Tabs from "../tabs";
import styles from "./burger-ingredients.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getBurgerIngredients } from "../../services/actions";

const BurgerIngredients = ({ toggleModal }) => {
  const ingredients = useSelector(
    (store) => store.burgerIngredients.ingredients
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients());
  });

  const titles = [
    { name: "Булки", key: "1", type: "bun" },
    { name: "Соусы", key: "2", type: "sauce" },
    { name: "Начинки", key: "3", type: "main" },
  ];

  return (
    <section className={`mr-5 ${styles.container}`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <Tabs titles={titles} />
      <div className={`mt-8 ${styles.scroll_menu}`}>
        {titles.map(({ name, key, type }) => {
          const items = ingredients.filter((product) => product.type === type);
          return (
            <div key={key}>
              <h2 className="text text_type_main-medium mt-2 mb-6">{name}</h2>
              <ul className={`mr-1 ml-1 ${styles.menu}`}>
                {items.map((item) => (
                  <li key={item._id}>
                    <MenuItem product={item} toggleModal={toggleModal} />
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

// BurgerIngredients.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//     }).isRequired
//   ),
// };

export default BurgerIngredients;

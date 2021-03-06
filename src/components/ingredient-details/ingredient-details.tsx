import React from "react";
import styles from "./ingredient-details.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "../../hooks";
import { IngredientType } from "../../types";

const IngredientDetails = () => {
  const { id } = useParams<{ id: string }>();

  const ingredients = useSelector(
    (store) => store.burgerIngredients.ingredients
  );

  const product = ingredients.find(
    (ingredient: IngredientType) => ingredient._id === id
  );

  return (
    <>
      {product && (
        <div className={styles.details}>
          <img src={product.image_large} alt={product.name} className="mb-4" />
          <p className="text text_type_main-medium">{product.name}</p>
          <p className="text text_type_main-default mt-8 mb-8">
            Супер {product.name} для фирменных космических бургеров, набирающих
            популярность по всей вселенной.
          </p>
          <div className={`text_color_inactive ${styles.nutrition}`}>
            <div className={`mr-5 ${styles.item}`}>
              <span className="text text_type_main-default">Калории,ккал</span>
              <span className="text text_type_digits-default mt-4">
                {product.calories}
              </span>
            </div>
            <div className={`mr-5 ${styles.item}`}>
              <span className="text text_type_main-default">Белки, г</span>
              <span className="text text_type_digits-default mt-4">
                {product.proteins}
              </span>
            </div>
            <div className={`mr-5 ${styles.item}`}>
              <span className="text text_type_main-default">Жиры, г</span>
              <span className="text text_type_digits-default mt-4">
                {product.fat}
              </span>
            </div>
            <div className={` ${styles.item}`}>
              <span className="text text_type_main-default">Углеводы, г</span>
              <span className="text text_type_digits-default mt-4">
                {product.carbohydrates}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IngredientDetails;

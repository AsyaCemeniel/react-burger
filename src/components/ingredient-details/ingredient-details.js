import React from "react";
import styles from "./ingredient-details.module.css";

const IngredientDetails = ({ product }) => {
  return (
    <div className={styles.details}>
      <img src={product.image_large} alt={product.name} className="mb-4" />
      <p className="text text_type_main-medium">{product.name}</p>
      <p className="text text_type_main-default mt-8 mb-8">
        Превосходные котлеты из марсианской Магнолии для фирменных космических
        бургеров, набирающих популярность по всей вселенной.
      </p>
      <div className={`text_color_inactive ${styles.nutrition}`}>
        <div className={`mr-5 ${styles.item}`}>
          <span className="text text_type_main-default">Калории,ккал</span>
          <span className="text text_type_digits-default mt-4">244,4</span>
        </div>
        <div className={`mr-5 ${styles.item}`}>
          <span className="text text_type_main-default">Белки, г</span>
          <span className="text text_type_digits-default mt-4">12,2</span>
        </div>
        <div className={`mr-5 ${styles.item}`}>
          <span className="text text_type_main-default">Жиры, г</span>
          <span className="text text_type_digits-default mt-4">17,2</span>
        </div>
        <div className={` ${styles.item}`}>
          <span className="text text_type_main-default">Углеводы, г</span>
          <span className="text text_type_digits-default mt-4">10,2</span>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetails;

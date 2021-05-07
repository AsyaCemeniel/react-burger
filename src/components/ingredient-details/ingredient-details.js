import React from "react";

const IngredientDetails = ({ product }) => {
  return (
    <div>
      <img src={product.image_large} alt={product.name} />
      <p>{product.name}</p>
      <p>
        Превосходные котлеты из марсианской Магнолии для фирменных космических
        бургеров, набирающих популярность по всей вселенной.
      </p>
      <div>
        <div>
          <p>Калории,ккал</p>
          <p>244,4</p>
        </div>
        <div>
          <p>Белки, г</p>
          <p>12,2</p>
        </div>
        <div>
          <p>Жиры, г</p>
          <p>17,2</p>
        </div>
        <div>
          <p>Углеводы, г</p>
          <p>10,2</p>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetails;

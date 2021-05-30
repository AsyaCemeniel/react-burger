import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from "prop-types";
import IngredientDetails from "../../ingredient-details";

import styles from "./menu-item.module.css";
import { useDispatch } from "react-redux";
import { SET_CURRENT_INGREDIENT } from "../../../services/actions";

const MenuItem = ({ product }) => {
  // const detailsComponent = <IngredientDetails product={product} />;
  // const title = "Детали ингредиента";
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch({
      type: SET_CURRENT_INGREDIENT,
      payload: product,
    });
  };

  return (
    <div className={` mr-3 ml-3 mb-8 ${styles.item}`} onClick={openModal}>
      {/* {product.__v > 0 && <Counter count={product.__v} size="small" />} */}
      <Counter count={product.__v} size="small" />
      <img src={product.image} alt={product.name} className="mr-4 mb-1 ml-4" />
      <p className={`text text_type_digits-default ${styles.price}`}>
        {product.price}
        <CurrencyIcon type="primary" />
      </p>
      <p
        className={`text text_type_main-default mt-1 pr-1 pb-6 pl-1 ${styles.title}`}
      >
        {product.name}
      </p>
    </div>
  );
};

MenuItem.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
  }).isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default MenuItem;

import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from "prop-types";
import styles from "./menu-item.module.css";
import { useDispatch, useSelector } from "react-redux";
import { SET_CURRENT_INGREDIENT } from "../../../services/actions";
import { useDrag } from "react-dnd";

const MenuItem = ({ product }) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch({
      type: SET_CURRENT_INGREDIENT,
      payload: product,
    });
  };

  const { burgerStuffing, bun } = useSelector(
    (state) => state.burgerConstructor
  );

  const getItemCount = () => {
    if (product.type === "bun") {
      return bun._id === product._id ? 1 : 0;
    }
    return burgerStuffing.reduce((count, item) => {
      return item.item._id === product._id ? ++count : count;
    }, 0);
  };

  const count = getItemCount();

  const [{ isDrop }, dragRef] = useDrag({
    type: "ingredient",
    item: product,
    collect: (monitor) => ({
      isDrop: monitor.didDrop(),
    }),
  });

  return (
    <div
      className={` mr-3 ml-3 mb-8 ${styles.item}`}
      onClick={openModal}
      ref={dragRef}
    >
      {count > 0 && <Counter count={count} size="small" />}
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
};

export default MenuItem;

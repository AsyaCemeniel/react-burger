import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import styles from "./burger-constructor.module.css";
import ConstructorContext from "../../context/burger-constructor-context";
import { useDispatch } from "react-redux";
import { getOrderDetails } from "../../services/actions";

const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const { constructorState, constructorDispatcher } =
    useContext(ConstructorContext);

  const bun = constructorState.data.find((product) => product.type === "bun");

  const totalPrice =
    constructorState.data.reduce((total, item) => total + item.price, 0) +
    (bun?.price || 0);

  const handleDeleteItem = (item) => () => {
    constructorDispatcher({ type: "DELETE", payload: item });
  };

  const openModal = () => {
    const isOrderValid = bun ? true : false;
    const ingredientsIds = constructorState.data.map((item) => item._id);
    dispatch(getOrderDetails(ingredientsIds, isOrderValid));
  };

  return (
    <section className={`ml-5  ${styles.section}`}>
      <div className={styles.main}>
        <ConstructorElement
          text={`${bun?.name} (верх)`}
          type="top"
          thumbnail={bun?.image_mobile}
          price={bun?.price}
          isLocked={true}
        />
        <ul className={`mt-4 mb-2 ${styles.scroll}`}>
          {constructorState.data
            .filter((item) => item.type !== "bun")
            .map((item) => (
              <li key={item._id} className={styles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  thumbnail={item.image_mobile}
                  price={item.price}
                  isLocked={false}
                  handleClose={handleDeleteItem(item)}
                />
              </li>
            ))}
        </ul>
        <ConstructorElement
          text={`${bun?.name} (низ)`}
          type="bottom"
          thumbnail={bun?.image_mobile}
          price={bun?.price}
          isLocked={true}
        />
      </div>
      <div className={`m-5 pr-4 ${styles.total_order}`}>
        <span className="text text_type_digits-medium pr-10">
          {totalPrice} <CurrencyIcon type="primary" />
        </span>
        <Button type="primary" size="large" onClick={openModal}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

// BurgerConstructor.propTypes = {
//   toggleModal: PropTypes.func,
// };

export default BurgerConstructor;

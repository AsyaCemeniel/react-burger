import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback } from "react";
import styles from "./burger-constructor.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_CONSTRUCTOR_ITEM,
  getOrderDetails,
  REORDER_CONSTRUCTOR_ITEMS,
} from "../../services/actions";
import { useDrop } from "react-dnd";
import ConstructorItem from "./constructor-item/constructor-item";

const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const { bun, burgerStuffing } = useSelector(
    (state) => state.burgerConstructor
  );

  const stuffingIngredients = burgerStuffing.map(
    (ingredient) => ingredient.item
  );

  const totalPrice =
    stuffingIngredients.reduce((total, item) => total + item.price, 0) +
    (bun?.price || 0) * 2;

  //======================== * functions for constructor elements * =======================

  const handlerDropItem = (item) => {
    dispatch({
      type: ADD_CONSTRUCTOR_ITEM,
      payload: item,
    });
  };

  const openModal = () => {
    const isOrderValid = Object.keys(bun).length ? true : false;
    const stuffingIds = stuffingIngredients.map((item) => item._id);
    dispatch(getOrderDetails(stuffingIds, isOrderValid));
  };

  //======================= * DND hooks and functions * ===============================================

  const findItem = useCallback(
    (key) => {
      const ingredient = burgerStuffing.filter((item) => item.key === key)[0];
      return {
        ingredient,
        index: burgerStuffing.indexOf(ingredient),
      };
    },
    [burgerStuffing]
  );

  const moveItem = useCallback(
    (key, fromIndex) => {
      const { index } = findItem(key);
      dispatch({
        type: REORDER_CONSTRUCTOR_ITEMS,
        payload: { toIndex: index, fromIndex },
      });
    },
    [findItem, burgerStuffing, dispatch]
  );

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      handlerDropItem(item);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const [, dropRef] = useDrop(() => ({ accept: "item" }));

  //================ * elements for initial constructor * =============================
  const background = isHover ? "#61616b" : "#2f2f37";
  const topBun = (
    <div
      className={`${styles.constructor_item_pos_top} ${styles.constructor_item}`}
      style={{ background }}
    >
      <span className={styles.constructor_item__row}>Добавьте булку</span>
    </div>
  );

  const bottomBun = (
    <div
      className={`${styles.constructor_item_pos_bottom} ${styles.constructor_item}`}
      style={{ background }}
    >
      <span className={styles.constructor_item__row}>Добавьте булку</span>
    </div>
  );

  const stuffing = (
    <div
      className={`${styles.constructor_item} ${styles.constructor_item}`}
      style={{ background }}
    >
      <span className={styles.constructor_item__row}>Добавьте начинку</span>
    </div>
  );

  return (
    <section ref={dropTarget} className={`ml-5  ${styles.section}`}>
      <div className={styles.main}>
        {Object.keys(bun).length ? (
          <ConstructorElement
            text={`${bun.name} (верх)`}
            type="top"
            thumbnail={bun.image_mobile}
            price={bun.price}
            isLocked={true}
          />
        ) : (
          topBun
        )}
        {burgerStuffing.length ? (
          <ul ref={dropRef} className={`mt-4 mb-2 ${styles.scroll}`}>
            {burgerStuffing.map((item) => (
              <ConstructorItem
                key={item.key}
                id={item.key}
                item={item}
                findItem={findItem}
                moveItem={moveItem}
                className={styles.item}
              />
            ))}
          </ul>
        ) : (
          stuffing
        )}
        {Object.keys(bun).length ? (
          <ConstructorElement
            text={`${bun?.name} (низ)`}
            type="bottom"
            thumbnail={bun?.image_mobile}
            price={bun?.price}
            isLocked={true}
          />
        ) : (
          bottomBun
        )}
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

export default BurgerConstructor;

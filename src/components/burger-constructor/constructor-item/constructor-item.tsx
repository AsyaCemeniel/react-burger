import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC } from "react";
import PropTypes from "prop-types";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { useDispatch } from "react-redux";
import { DELETE_CONSTRUCTOR_ITEM } from "../../../services/actions";
import styles from "./constructor-item.module.css";
import { DragIdType, PropsType } from "./types";
import { IngredientWithKeyType } from "../../../types";

const ConstructorItem: FC<PropsType> = ({ item, id, findItem, moveItem }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = (item: IngredientWithKeyType) => () => {
    dispatch({ type: DELETE_CONSTRUCTOR_ITEM, payload: item });
  };

  const originalIndex = findItem(id).index;

  const [{ isDrag }, drag] = useDrag(
    () => ({
      type: "item",
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDrag: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveItem(id, originalIndex);
        }
      },
    }),
    [id, originalIndex, moveItem]
  );

  const [{ handlerId }, drop] = useDrop(
    {
      accept: "item",
      collect(monitor) {
        return {
          handlerId: monitor.getHandlerId(),
        };
      },
      hover(item: DragIdType, monitor: DropTargetMonitor) {
        const draggedId = item.id;
        if (draggedId !== id) {
          const { index: overIndex } = findItem(id);
          moveItem(draggedId, overIndex);
        }
      },
    },
    [findItem, moveItem]
  );

  const opacity = isDrag ? 0 : 1;

  return (
    <li
      ref={(node) => drag(drop(node))}
      style={{ opacity }}
      className={styles.item}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.item.name}
        thumbnail={item.item.image_mobile}
        price={item.item.price}
        isLocked={false}
        handleClose={handleDeleteItem(item)}
      />
    </li>
  );
};

export default ConstructorItem;

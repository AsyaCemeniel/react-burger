import { IngredientType, IngredientWithKeyType } from "../../../types";

export type PropsType = {
  item: IngredientWithKeyType;
  id: string;
  findItem: (id: string) => {
    ingredient: IngredientWithKeyType;
    index: number;
  };
  moveItem: (id: string, originalIndex: number) => void;
};

export type DragIdType = {
  id: string;
};

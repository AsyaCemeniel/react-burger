import { IngredientWithKeyType } from "../../types";

export type FindCallback = (key: string) => {
  ingredient: IngredientWithKeyType;
  index: number;
};

export type MoveCallback = (key: string, fromIndex: number) => void;

import {
  ADD_CONSTRUCTOR_ITEM,
  BurgerConstructorActions,
  DELETE_CONSTRUCTOR_ITEM,
  DELETE_ORDER,
  REORDER_CONSTRUCTOR_ITEMS,
} from "../actions";
import { v4 as uuidv4 } from "uuid";
import { IngredientType, IngredientWithKeyType } from "../../types";

type ConstructorState = {
  burgerStuffing: IngredientWithKeyType[];
  bun: IngredientType | null;
};

const initialState: ConstructorState = {
  burgerStuffing: [],
  bun: null,
};

const BurgerConstructor = (
  state = initialState,
  action: BurgerConstructorActions
): ConstructorState => {
  switch (action.type) {
    case ADD_CONSTRUCTOR_ITEM: {
      if (action.payload.type === "bun") {
        return {
          ...state,
          bun: action.payload,
        };
      }
      return {
        ...state,
        burgerStuffing: [
          ...state.burgerStuffing,
          { key: uuidv4(), item: action.payload },
        ],
      };
    }
    case DELETE_CONSTRUCTOR_ITEM:
      return {
        ...state,
        burgerStuffing: [...state.burgerStuffing].filter((item) => {
          return item.key !== action.payload.key;
        }),
      };
    case REORDER_CONSTRUCTOR_ITEMS: {
      const { toIndex, fromIndex } = action.payload;
      const burgerStuffing = [...state.burgerStuffing];
      burgerStuffing.splice(toIndex, 0, burgerStuffing.splice(fromIndex, 1)[0]);
      return {
        ...state,
        burgerStuffing,
      };
    }
    case DELETE_ORDER:
      return {
        ...state,
        burgerStuffing: [],
        bun: null,
      };
    default:
      return state;
  }
};

export default BurgerConstructor;

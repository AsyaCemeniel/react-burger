import {
  ADD_CONSTRUCTOR_ITEM,
  DELETE_CONSTRUCTOR_ITEM,
  REORDER_CONSTRUCTOR_ITEMS,
} from "../actions";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  burgerStuffing: [],
  bun: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_CONSTRUCTOR_ITEM: {
      if (payload.type === "bun") {
        return {
          ...state,
          bun: payload,
        };
      }
      return {
        ...state,
        burgerStuffing: [
          ...state.burgerStuffing,
          { key: uuidv4(), item: payload },
        ],
      };
    }
    case DELETE_CONSTRUCTOR_ITEM:
      return {
        ...state,
        burgerStuffing: [...state.burgerStuffing].filter((item) => {
          return item.key !== payload.key;
        }),
      };
    case REORDER_CONSTRUCTOR_ITEMS: {
      const { toIndex, fromIndex } = payload;
      const burgerStuffing = [...state.burgerStuffing];
      burgerStuffing.splice(toIndex, 0, burgerStuffing.splice(fromIndex, 1)[0]);
      return {
        ...state,
        burgerStuffing,
      };
    }
    default:
      return state;
  }
};

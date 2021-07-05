import {
  ADD_CONSTRUCTOR_ITEM,
  DELETE_CONSTRUCTOR_ITEM,
  DELETE_ORDER,
  REORDER_CONSTRUCTOR_ITEMS,
} from "../actions";
import burgerConstructor from "./burger-constructor";
import { products } from "../../utils/data";

const state = {
  burgerStuffing: [],
  bun: {},
};

const fullState = {
  burgerStuffing: [
    { key: "aaa", item: products[1] },
    { key: "bbb", item: products[2] },
  ],
  bun: products[0],
};

describe("Burger Constructor reducer", () => {
  it("should return the initial state", () => {
    expect(burgerConstructor(undefined, {})).toEqual(state);
  });

  it("should return constructor to initial state", () => {
    expect(burgerConstructor(state, { type: DELETE_ORDER })).toEqual(state);
  });

  it("should add Bun to state", () => {
    expect(
      burgerConstructor(state, {
        type: ADD_CONSTRUCTOR_ITEM,
        payload: products[0],
      })
    ).toEqual(expect.objectContaining({ bun: products[0] }));
  });

  it("should add burgerStuffing to state", () => {
    expect(
      burgerConstructor(state, {
        type: ADD_CONSTRUCTOR_ITEM,
        payload: products[1],
      }).burgerStuffing
    ).toHaveLength(1);
  });

  it("should delete one item from burgerStuffing", () => {
    expect(
      burgerConstructor(fullState, {
        type: DELETE_CONSTRUCTOR_ITEM,
        payload: { key: "bbb", item: products[2] },
      }).burgerStuffing
    ).toHaveLength(1);
  });

  it("should reorder items in burgerStuffing", () => {
    expect(
      burgerConstructor(fullState, {
        type: REORDER_CONSTRUCTOR_ITEMS,
        payload: { toIndex: 0, fromIndex: 1 },
      })
    ).toEqual(
      expect.objectContaining({
        burgerStuffing: [
          { key: "bbb", item: products[2] },
          { key: "aaa", item: products[1] },
        ],
      })
    );
  });
});

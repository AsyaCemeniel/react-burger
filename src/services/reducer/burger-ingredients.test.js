import {
  GET_INGREDIENTS_FAILURE,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from "../actions";
import burgerIngredients from "./burger-ingredients";
import { products } from "../../utils/data";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailure: false,
};

describe("burger-ingredients reducer", () => {
  it("should return the initial state", () => {
    expect(burgerIngredients(undefined, {})).toEqual(initialState);
  });

  it("should set ingredients request to true", () => {
    expect(
      burgerIngredients(initialState, { type: GET_INGREDIENTS_REQUEST })
    ).toEqual(expect.objectContaining({ ingredientsRequest: true }));
  });

  it("should set ingredients failure to true", () => {
    expect(
      burgerIngredients(initialState, { type: GET_INGREDIENTS_FAILURE })
    ).toEqual(expect.objectContaining({ ingredientsFailure: true }));
  });

  it("should set ingredients", () => {
    expect(
      burgerIngredients(initialState, {
        type: GET_INGREDIENTS_SUCCESS,
        payload: products,
      })
    ).toEqual(
      expect.objectContaining({
        ingredients: products,
        ingredientsRequest: false,
        ingredientsFailure: false,
      })
    );
  });
});

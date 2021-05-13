import React, { createContext, useReducer, useState } from "react";
import { products } from "../utils/data";

const ConstructorContext = createContext();

const ingredients = products.filter((product) => product.__v > 0);

const deleteIngredient = (ingredient) => {
  const index = ingredients.indexOf(ingredient);
  if (index > 0) {
    ingredients.splice(index, 1);
  }

  return ingredients;
};

const initialState = { data: ingredients };

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "DELETE":
      return { data: deleteIngredient(payload) };
    default:
      throw new Error(`Wrong type of action: ${type}`);
  }
};

export function BurgerConstructorProvider({ children }) {
  const [constructorState, constructorDispatcher] = useReducer(
    reducer,
    initialState
  );

  return (
    <ConstructorContext.Provider
      value={{ constructorState, constructorDispatcher }}
    >
      {children}
    </ConstructorContext.Provider>
  );
}

export default ConstructorContext;

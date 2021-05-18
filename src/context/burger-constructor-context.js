import React, { createContext, useReducer, useState } from "react";
import { products } from "../utils/data";

const ConstructorContext = createContext();

const ingredients = products.filter((product) => product.__v > 0);

const initialState = { data: ingredients };

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "DELETE":
      return {
        ...state,
        data: state.data.filter((item) => item._id !== payload._id),
      };
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

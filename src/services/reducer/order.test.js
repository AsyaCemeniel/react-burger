import {
  DELETE_ORDER_DETAILS,
  GET_ORDER_DETAILS_FAILURE,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
} from "../actions";
import order from "./order";

const state = {
  orderNumber: null,
  isOrderInvalid: false,
  orderNumberRequest: false,
  orderNumberFailure: false,

  currentOrder: null,
  orderRequest: false,
  orderFailure: false,

  isOrdered: false,
};

describe("order reducer", () => {
  it("should return the initial state", () => {
    expect(order(undefined, {})).toEqual(state);
  });

  it("should set order request to true", () => {
    expect(order(state, { type: GET_ORDER_DETAILS_REQUEST })).toEqual(
      expect.objectContaining({ orderNumberRequest: true })
    );
  });

  it("should set order failure to true", () => {
    expect(order(state, { type: GET_ORDER_DETAILS_FAILURE })).toEqual(
      expect.objectContaining({ orderNumberFailure: true })
    );
  });

  it("should set order number and order validation", () => {
    expect(
      order(state, {
        type: GET_ORDER_DETAILS_SUCCESS,
        payload: { orderNumber: 4444, isInvalid: false },
      })
    ).toEqual(
      expect.objectContaining({ orderNumber: 4444, isOrderInvalid: false })
    );
  });

  it("should set order status", () => {
    expect(order(state, { type: DELETE_ORDER_DETAILS, payload: true })).toEqual(
      expect.objectContaining({ isOrdered: true })
    );
  });
});

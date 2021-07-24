import { OrderType } from "../../types";
import {
  DELETE_ORDER_DETAILS,
  GET_ORDER_DETAILS_FAILURE,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_FAILURE,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  OrderActions,
  SET_ORDER_INVALID,
} from "../actions";

type OrderState = {
  orderNumber: number | null;
  isOrderInvalid: boolean;
  orderNumberRequest: boolean;
  orderNumberFailure: boolean;

  currentOrder: OrderType | null;
  orderRequest: boolean;
  orderFailure: boolean;

  isOrdered: boolean;
};

const initialState: OrderState = {
  orderNumber: null,
  isOrderInvalid: false,
  orderNumberRequest: false,
  orderNumberFailure: false,

  currentOrder: null,
  orderRequest: false,
  orderFailure: false,

  isOrdered: false,
};

const Order = (state = initialState, action: OrderActions): OrderState => {
  switch (action.type) {
    case GET_ORDER_DETAILS_REQUEST:
      return {
        ...state,
        orderNumberRequest: true,
      };
    case GET_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        orderNumber: action.payload,
        orderNumberRequest: false,
        orderNumberFailure: false,
      };
    case GET_ORDER_DETAILS_FAILURE:
      return {
        ...state,
        orderNumberRequest: false,
        orderNumberFailure: true,
      };
    case DELETE_ORDER_DETAILS:
      return {
        ...state,
        isOrdered: action.payload,
        orderNumber: null,
      };
    case SET_ORDER_INVALID:
      return {
        ...state,
        isOrderInvalid: action.payload,
      };
    case GET_ORDER_REQUEST:
      return {
        ...state,
        orderRequest: true,
      };
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        currentOrder: action.payload,
        orderRequest: false,
        orderFailure: false,
      };
    case GET_ORDER_FAILURE:
      return {
        ...state,
        orderRequest: false,
        orderFailure: true,
      };
    default:
      return state;
  }
};

export default Order;

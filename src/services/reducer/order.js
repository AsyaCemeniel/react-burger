import {
  DELETE_ORDER_DETAILS,
  GET_ORDER_DETAILS_FAILURE,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_FAILURE,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  SET_ORDER_INVALID,
} from "../actions";

const initialState = {
  orderNumber: null,
  isOrderInvalid: false,
  orderNumberRequest: false,
  orderNumberFailure: false,

  currentOrder: null,
  orderRequest: false,
  orderFailure: false,

  isOrdered: false,
};

const Order = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ORDER_DETAILS_REQUEST:
      return {
        ...state,
        orderNumberRequest: true,
      };
    case GET_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        orderNumber: payload,
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
        isOrdered: payload,
      };
    case SET_ORDER_INVALID:
      return {
        ...state,
        isOrderInvalid: payload,
      };
    case GET_ORDER_REQUEST:
      return {
        ...state,
        orderRequest: true,
      };
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        currentOrder: payload,
        orderRequest: false,
        orderFailure: false,
      };
    case GET_ORDER_FAILURE:
      return {
        ...state,
        orderRequest: false,
        orderFailure: true,
      };
    // case GET_USER_ORDER_REQUEST:
    //   return {
    //     ...state,
    //     orderRequest: true,
    //   };
    // case GET_USER_ORDER_SUCCESS:
    //   return {
    //     ...state,
    //     currentOrder: payload,
    //     orderRequest: false,
    //     orderFailure: false,
    //   };
    // case GET_USER_ORDER_FAILURE:
    //   return {
    //     ...state,
    //     orderRequest: false,
    //     orderFailure: true,
    //   };
    default:
      return state;
  }
};

export default Order;

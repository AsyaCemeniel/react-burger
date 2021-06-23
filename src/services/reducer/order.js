import {
  DELETE_ORDER_DETAILS,
  GET_ORDER_DETAILS_FAILURE,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
} from "../actions";

const initialState = {
  order: null,
  isOrderInvalid: false,
  orderRequest: false,
  orderFailure: false,
};

const Order = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ORDER_DETAILS_REQUEST:
      return {
        ...state,
        orderRequest: true,
      };
    case GET_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        order: payload.order,
        isOrderInvalid: payload.isInvalid,
        orderRequest: false,
        orderFailure: false,
      };
    case GET_ORDER_DETAILS_FAILURE:
      return {
        ...state,
        orderRequest: false,
        orderFailure: true,
      };
    // case DELETE_ORDER_DETAILS:
    //   return {
    //     ...state,
    //     order: null,
    //     isOrderInvalid: false,
    //   };
    default:
      return state;
  }
};

export default Order;

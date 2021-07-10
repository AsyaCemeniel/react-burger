import { wsOrdersActions } from "../orders-actions";

const initialState = {
  wsConnected: false,
  error: null,
  messages: [],
};

const { onOpen, onClose, onError, onMessage } = wsOrdersActions;

const wsOrders = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case onOpen:
      return {
        ...state,
        wsConnected: true,
      };
    case onError:
      return {
        ...state,
        error: payload,
        wsConnected: false,
      };
    case onClose:
      return {
        ...state,
        wsConnected: false,
      };
    case onMessage:
      return {
        ...state,
        messages: payload.data,
      };
    default:
      return state;
  }
};

export default wsOrders;

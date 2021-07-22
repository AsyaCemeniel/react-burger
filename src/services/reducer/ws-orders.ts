import { PayloadAction } from "@reduxjs/toolkit";
import { WSDataType } from "../../types";
import { WSOrderActionsType, wsOrdersActions } from "../orders-actions";

type OrdersState = {
  wsConnected: boolean;
  error: PayloadAction | null;
  messages: WSDataType | null;
};

const initialState: OrdersState = {
  wsConnected: false,
  error: null,
  messages: null,
};

const { onOpen, onClose, onError, onMessage } = wsOrdersActions;

const wsOrders = (
  state = initialState,
  action: WSOrderActionsType
): OrdersState => {
  switch (action.type) {
    case onOpen:
      return {
        ...state,
        wsConnected: true,
      };
    case onError:
      return {
        ...state,
        error: action.payload,
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
        messages: action.payload,
      };
    default:
      return state;
  }
};

export default wsOrders;

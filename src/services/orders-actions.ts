import { PayloadAction } from "@reduxjs/toolkit";
import { WSDataType } from "../types";

const INIT_CONNECTION: "ORDERS/INIT_CONNECTION" = `ORDERS/INIT_CONNECTION`;
const CLOSE_CONNECTION: "ORDERS/CLOSE_CONNECTION" = `ORDERS/CLOSE_CONNECTION`;
const CONNECTION_SUCCESS: "ORDERS/CONNECTION_SUCCESS" = `ORDERS/CONNECTION_SUCCESS`;
const CONNECTION_ERROR: "ORDERS/CONNECTION_ERROR" = `ORDERS/CONNECTION_ERROR`;
const CONNECTION_CLOSED: "ORDERS/CONNECTION_CLOSED" = `ORDERS/CONNECTION_CLOSED`;
const GET_MESSAGE: "ORDERS/GET_MESSAGE" = `ORDERS/GET_MESSAGE`;

export const wsOrdersActions = {
  wsInit: INIT_CONNECTION,
  wsClose: CLOSE_CONNECTION,
  wsSendMessage: "",
  onOpen: CONNECTION_SUCCESS,
  onClose: CONNECTION_CLOSED,
  onError: CONNECTION_ERROR,
  onMessage: GET_MESSAGE,
};

export interface IWSInitConnection {
  readonly type: typeof INIT_CONNECTION;
}
export interface IWSCloseConnection {
  readonly type: typeof CLOSE_CONNECTION;
}
export interface IWSConnectionSuccess {
  readonly type: typeof CONNECTION_SUCCESS;
  payload: PayloadAction;
}
export interface IWSConnectionError {
  readonly type: typeof CONNECTION_ERROR;
  payload: PayloadAction;
}
export interface IWSConnectionClosed {
  readonly type: typeof CONNECTION_CLOSED;
  payload: PayloadAction;
}
export interface IWSGetMessage {
  readonly type: typeof GET_MESSAGE;
  payload: WSDataType;
}

export type WSOrderActionsType =
  | IWSInitConnection
  | IWSCloseConnection
  | IWSConnectionSuccess
  | IWSConnectionError
  | IWSConnectionClosed
  | IWSGetMessage;

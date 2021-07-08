export const name = "ORDERS";

export const ActionTypes = {
  INIT_CONNECTION: `${name}/INIT_CONNECTION`,
  CLOSE_CONNECTION: `${name}/CLOSE_CONNECTION`,
  CONNECTION_SUCCESS: `${name}/CONNECTION_SUCCESS`,
  CONNECTION_ERROR: `${name}/CONNECTION_ERROR`,
  CONNECTION_CLOSED: `${name}/CONNECTION_CLOSED`,
  GET_MESSAGE: `${name}/GET_MESSAGE`,
};

export const wsOrdersActions = {
  wsInit: ActionTypes.INIT_CONNECTION,
  wsClose: ActionTypes.CLOSE_CONNECTION,
  wsSendMessage: "",
  onOpen: ActionTypes.CONNECTION_SUCCESS,
  onClose: ActionTypes.CONNECTION_CLOSED,
  onError: ActionTypes.CONNECTION_ERROR,
  onMessage: ActionTypes.GET_MESSAGE,
};

import { wsFeedActions } from "../feed-actions";

const initialState = {
  wsConnected: false,
  error: null,
  messages: null,
};

const { onOpen, onClose, onError, onMessage } = wsFeedActions;

const wsFeed = (state = initialState, action) => {
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

export default wsFeed;

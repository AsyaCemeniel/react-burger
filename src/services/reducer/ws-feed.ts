import { PayloadAction } from "@reduxjs/toolkit";
import { WSDataType } from "../../types";
import { wsFeedActions, WSFeedActionsType } from "../feed-actions";

type FeedState = {
  wsConnected: boolean;
  error: PayloadAction | null;
  messages: WSDataType | null;
};

const initialState: FeedState = {
  wsConnected: false,
  error: null,
  messages: null,
};

const { onOpen, onClose, onError, onMessage } = wsFeedActions;

const wsFeed = (state = initialState, action: WSFeedActionsType): FeedState => {
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

export default wsFeed;

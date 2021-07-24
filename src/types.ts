import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  BurgerConstructorActions,
  GetIngredientsActions,
  OrderActions,
} from "./services/actions";
import { WSFeedActionsType } from "./services/feed-actions";
import { WSOrderActionsType } from "./services/orders-actions";
import store from "./services/store";
import { UserActions } from "./services/user-actions";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type ApplicationActions =
  | GetIngredientsActions
  | BurgerConstructorActions
  | OrderActions
  | UserActions
  | WSFeedActionsType
  | WSOrderActionsType;

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, ApplicationActions>
>;

export type IngredientType = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v?: number;
  count?: number;
};

export type IngredientWithKeyType = {
  key: string;
  item: IngredientType;
};

export type OrderType = {
  createdAt: string;
  ingredients: Array<string>;
  name: string;
  number: number;
  status: "done" | "pending" | "cancel";
  updatedAt: string;
  _id: string;
};

export type UserType = {
  email: string;
  name: string;
  password?: string;
};

export type WSDataType = {
  success: boolean;
  orders: OrderType[];
  total: number;
  totalToday: number;
};

export type WSActions = {
  wsInit: string;
  wsClose: string;
  wsSendMessage: string;
  onOpen: string;
  onClose: string;
  onError: string;
  onMessage: string;
};

export type LocationType = {
  background?: any;
};

export type CookiePropsType = {
  expires?: number | string;
  path?: string;
} & { [extraParams: string]: string | number | boolean };

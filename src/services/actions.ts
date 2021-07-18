import {
  AppDispatch,
  AppThunk,
  IngredientType,
  IngredientWithKeyType,
  OrderType,
} from "../types";
import {
  getIngredients,
  getOrderNumber,
  getOrderRequest,
} from "../utils/burger-api";

export const GET_INGREDIENTS_REQUEST: "GET_INGREDIENTS_REQUEST" =
  "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS: "GET_INGREDIENTS_SUCCESS" =
  "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILURE: "GET_INGREDIENTS_FAILURE" =
  "GET_INGREDIENTS_FAILURE";

export const ADD_CONSTRUCTOR_ITEM: "ADD_CONSTRUCTOR_ITEM" =
  "ADD_CONSTRUCTOR_ITEM";
export const DELETE_CONSTRUCTOR_ITEM: "DELETE_CONSTRUCTOR_ITEM" =
  "DELETE_CONSTRUCTOR_ITEM";
export const REORDER_CONSTRUCTOR_ITEMS: "REORDER_CONSTRUCTOR_ITEMS" =
  "REORDER_CONSTRUCTOR_ITEMS";

export const DELETE_ORDER: "DELETE_ORDER" = "DELETE_ORDER";

export const GET_ORDER_DETAILS_REQUEST: "GET_ORDER_DETAILS_REQUEST" =
  "GET_ORDER_DETAILS_REQUEST";
export const GET_ORDER_DETAILS_SUCCESS: "GET_ORDER_DETAILS_SUCCESS" =
  "GET_ORDER_DETAILS_SUCCESS";
export const GET_ORDER_DETAILS_FAILURE: "GET_ORDER_DETAILS_FAILURE" =
  "GET_ORDER_DETAILS_FAILURE";

export const SET_ORDER_INVALID: "SET_ORDER_INVALID" = "SET_ORDER_INVALID";

export const DELETE_ORDER_DETAILS: "DELETE_ORDER_DETAILS" =
  "DELETE_ORDER_DETAILS";

export const GET_ORDER_REQUEST: "GET_ORDER_REQUEST" = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS: "GET_ORDER_SUCCESS" = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILURE: "GET_ORDER_FAILURE" = "GET_ORDER_FAILURE";

export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly payload: IngredientType[];
}

export interface IGetIngredientFailure {
  readonly type: typeof GET_INGREDIENTS_FAILURE;
}

export interface IAddConstructorItem {
  readonly type: typeof ADD_CONSTRUCTOR_ITEM;
  payload: IngredientType;
}
export interface IDeleteConstructorItem {
  readonly type: typeof DELETE_CONSTRUCTOR_ITEM;
  payload: IngredientWithKeyType;
}
export interface IReorderConstructorItem {
  readonly type: typeof REORDER_CONSTRUCTOR_ITEMS;
  payload: { toIndex: number; fromIndex: number };
}
export interface IDeleteOrder {
  readonly type: typeof DELETE_ORDER;
}

export interface IGetOrderDetailsRequest {
  readonly type: typeof GET_ORDER_DETAILS_REQUEST;
}

export interface IGetOrderDetailsSuccess {
  readonly type: typeof GET_ORDER_DETAILS_SUCCESS;
  readonly payload: number;
}

export interface IGetOrderDetailsFailure {
  readonly type: typeof GET_ORDER_DETAILS_FAILURE;
}
export interface ISetOrderInvalid {
  readonly type: typeof SET_ORDER_INVALID;
  readonly payload: boolean;
}
export interface IDeleteOrderDetails {
  readonly type: typeof DELETE_ORDER_DETAILS;
  readonly payload: boolean;
}
export interface IGetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly payload: OrderType;
}

export interface IGetOrderFailure {
  readonly type: typeof GET_ORDER_FAILURE;
}

export type GetIngredientsActions =
  | IGetIngredientsRequest
  | IGetIngredientsSuccess
  | IGetIngredientFailure;

export type BurgerConstructorActions =
  | IAddConstructorItem
  | IDeleteConstructorItem
  | IReorderConstructorItem
  | IDeleteOrder;

export type OrderActions =
  | IGetOrderDetailsRequest
  | IGetOrderDetailsSuccess
  | IGetOrderDetailsFailure
  | ISetOrderInvalid
  | IDeleteOrderDetails
  | IGetOrderRequest
  | IGetOrderSuccess
  | IGetOrderFailure;

export const getBurgerIngredients: AppThunk = () => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });

    try {
      const res = await getIngredients();
      if (res && res.success) {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          payload: res.data,
        });
      } else {
        throw new Error("Response status is not OK");
      }
    } catch (error) {
      dispatch({
        type: GET_INGREDIENTS_FAILURE,
      });
      console.log("There is a problem with your Fetch request", error.message);
    }
  };
};

export const getOrderDetails: AppThunk = (orderData: string[]) => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: GET_ORDER_DETAILS_REQUEST,
    });

    try {
      const res = await getOrderNumber(orderData);
      if (res && res.success) {
        dispatch({
          type: GET_ORDER_DETAILS_SUCCESS,
          payload: res.order.number,
        });
      } else {
        throw new Error("Response status is not OK");
      }
    } catch (error) {
      dispatch({
        type: GET_ORDER_DETAILS_FAILURE,
      });
      console.log("There is a problem with your Fetch request", error.message);
    }
  };
};

export const getOrder: AppThunk = (orderNumber: string) => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: GET_ORDER_REQUEST,
    });

    try {
      const res = await getOrderRequest(orderNumber);
      if (res && res.success) {
        dispatch({
          type: GET_ORDER_SUCCESS,
          payload: res.orders[0],
        });
      } else {
        throw new Error("Response status is not OK");
      }
    } catch (error) {
      dispatch({
        type: GET_ORDER_FAILURE,
      });
      console.log("There is a problem with your Fetch request", error.message);
    }
  };
};

// export function getUserOrder(orderNumber) {
//   return async function (dispatch) {
//     dispatch({
//       type: GET_USER_ORDER_REQUEST,
//     });

//     try {
//       const res = await getUserOrderRequest(orderNumber);
//       if (res && res.success) {
//         dispatch({
//           type: GET_USER_ORDER_SUCCESS,
//           payload: res.orders[0],
//         });
//       } else {
//         throw new Error("Response status is not OK");
//       }
//     } catch (error) {
//       dispatch({
//         type: GET_USER_ORDER_FAILURE,
//       });
//       console.log("There is a problem with your Fetch request", error.message);
//     }
//   };
// }

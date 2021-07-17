import {
  getIngredients,
  getOrderNumber,
  getOrderRequest,
  getUserOrderRequest,
} from "../utils/burger-api";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILURE = "GET_INGREDIENTS_FAILURE";

export const ADD_CONSTRUCTOR_ITEM = "ADD_CONSTRUCTOR_ITEM";
export const DELETE_CONSTRUCTOR_ITEM = "DELETE_CONSTRUCTOR_ITEM";
export const REORDER_CONSTRUCTOR_ITEMS = "REORDER_CONSTRUCTOR_ITEMS";

export const GET_ORDER_DETAILS_REQUEST = "GET_ORDER_DETAILS_REQUEST";
export const GET_ORDER_DETAILS_SUCCESS = "GET_ORDER_DETAILS_SUCCESS";
export const GET_ORDER_DETAILS_FAILURE = "GET_ORDER_DETAILS_FAILURE";

export const SET_ORDER_INVALID = "SET_ORDER_INVALID";

export const DELETE_ORDER_DETAILS = "DELETE_ORDER_DETAILS";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILURE = "GET_ORDER_FAILURE";

// export const GET_USER_ORDER_REQUEST = "GET_ORDER_REQUEST";
// export const GET_USER_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
// export const GET_USER_ORDER_FAILURE = "GET_ORDER_FAILURE";

export const DELETE_ORDER = "DELETE_ORDER";

export function getBurgerIngredients() {
  return async function (dispatch) {
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
}

export function getOrderDetails(orderData) {
  return async function (dispatch) {
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
}

export function getOrder(orderNumber) {
  return async function (dispatch) {
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
}

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

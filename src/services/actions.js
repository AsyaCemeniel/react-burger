export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILURE = "GET_INGREDIENTS_FAILURE";

export const ADD_CONSTRUCTOR_ITEM = "ADD_CONSTRUCTOR_ITEM";
export const DELETE_CONSTRUCTOR_ITEM = "DELETE_CONSTRUCTOR_ITEM";
export const REORDER_CONSTRUCTOR_ITEMS = "REORDER_CONSTRUCTOR_ITEMS";

export const SET_CURRENT_INGREDIENT = "SET_CURRENT_INGREDIENT";
export const REMOVE_CURRENT_INGREDIENT = "REMOVE_CURRENT_INGREDIENT";

export const GET_ORDER_DETAILS_REQUEST = "GET_ORDER_DETAILS_REQUEST";
export const GET_ORDER_DETAILS_SUCCESS = "GET_ORDER_DETAILS_SUCCESS";
export const GET_ORDER_DETAILS_FAILURE = "GET_ORDER_DETAILS_FAILURE";
export const DELETE_ORDER_DETAILS = "DELETE_ORDER_DETAILS";

export function getBurgerIngredients() {
  return async function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });

    try {
      const res = await fetch(
        "https://norma.nomoreparties.space/api/ingredients"
      );
      if (!res.ok) {
        throw new Error("Response status is not OK");
      }

      const resData = await res.json();
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        payload: resData.data,
      });
    } catch (error) {
      dispatch({
        type: GET_INGREDIENTS_FAILURE,
      });
      console.log("There is a problem with your Fetch request", error.message);
    }
  };
}

export function getOrderDetails(orderData, isOrderValid) {
  const postData = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients: orderData }),
  };

  return async function (dispatch) {
    dispatch({
      type: GET_ORDER_DETAILS_REQUEST,
    });

    try {
      const res = await fetch(
        "https://norma.nomoreparties.space/api/orders",
        postData
      );
      if (!res.ok) {
        throw new Error("Response status is not OK");
      }
      const resData = await res.json();
      dispatch({
        type: GET_ORDER_DETAILS_SUCCESS,
        payload: { order: resData.order.number, isInvalid: !isOrderValid },
      });
    } catch (error) {
      dispatch({
        type: GET_ORDER_DETAILS_FAILURE,
      });
      console.log("There is a problem with your Fetch request", error.message);
    }
  };
}

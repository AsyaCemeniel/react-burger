import { deleteCookie, setCookie } from "../utils";
import { push } from "connected-react-router";
import {
  register,
  login,
  forgotPassword,
  resetPassword,
  logout,
  refreshToken,
  getUser,
  updateUser,
} from "../utils/burger-api";
import { AppDispatch, AppThunk, UserType } from "../types";

export const REGISTER_REQUEST: "REGISTER_REQUEST" = "REGISTER_REQUEST";
export const REGISTER_SUCCESS: "REGISTER_SUCCESS" = "REGISTER_SUCCESS";
export const REGISTER_FAILURE: "REGISTER_FAILURE" = "REGISTER_FAILURE";

export const LOGIN_REQUEST: "LOGIN_REQUEST" = "LOGIN_REQUEST";
export const LOGIN_SUCCESS: "LOGIN_SUCCESS" = "LOGIN_SUCCESS";
export const LOGIN_FAILURE: "LOGIN_FAILURE" = "LOGIN_FAILURE";

export const LOGOUT_REQUEST: "LOGOUT_REQUEST" = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS: "LOGOUT_SUCCESS" = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE: "LOGOUT_FAILURE" = "LOGOUT_FAILURE";

export const FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST" =
  "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS" =
  "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILURE: "FORGOT_PASSWORD_FAILURE" =
  "FORGOT_PASSWORD_FAILURE";

export const RESET_PASSWORD_REQUEST: "RESET_PASSWORD_REQUEST" =
  "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS" =
  "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILURE: "RESET_PASSWORD_FAILURE" =
  "RESET_PASSWORD_FAILURE";

export const REFRESH_TOKEN_REQUEST: "REFRESH_TOKEN_REQUEST" =
  "REFRESH_TOKEN_REQUEST";
export const REFRESH_TOKEN_SUCCESS: "REFRESH_TOKEN_SUCCESS" =
  "REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_FAILURE: "REFRESH_TOKEN_FAILURE" =
  "REFRESH_TOKEN_FAILURE";

export const GET_USER_REQUEST: "GET_USER_REQUEST" = "GET_USER_REQUEST";
export const GET_USER_SUCCESS: "GET_USER_SUCCESS" = "GET_USER_SUCCESS";
export const GET_USER_FAILURE: "GET_USER_FAILURE" = "GET_USER_FAILURE";

export const UPDATE_USER_REQUEST: "UPDATE_USER_REQUEST" = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS" = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE: "UPDATE_USER_FAILURE" = "UPDATE_USER_FAILURE";

export interface IRegisterRequest {
  readonly type: typeof REGISTER_REQUEST;
}
export interface IRegisterSuccess {
  readonly type: typeof REGISTER_SUCCESS;
  readonly payload: { user: UserType };
}
export interface IRegisterFailure {
  readonly type: typeof REGISTER_FAILURE;
}

export interface ILoginRequest {
  readonly type: typeof LOGIN_REQUEST;
}
export interface ILoginSuccess {
  readonly type: typeof LOGIN_SUCCESS;
  readonly payload: { user: UserType };
}
export interface ILoginFailure {
  readonly type: typeof LOGIN_FAILURE;
}

export interface ILogoutRequest {
  readonly type: typeof LOGOUT_REQUEST;
}
export interface ILogoutSuccess {
  readonly type: typeof LOGOUT_SUCCESS;
}
export interface ILogoutFailure {
  readonly type: typeof LOGOUT_FAILURE;
}

export interface IForgotPasswordRequest {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
}
export interface IForgotPasswordSuccess {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}
export interface IForgotPasswordFailure {
  readonly type: typeof FORGOT_PASSWORD_FAILURE;
}

export interface IResetPasswordRequest {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}
export interface IResetPasswordSuccess {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
}
export interface IResetPasswordFailure {
  readonly type: typeof RESET_PASSWORD_FAILURE;
}

export interface IRefreshTokenRequest {
  readonly type: typeof REFRESH_TOKEN_REQUEST;
}
export interface IRefreshTokenSuccess {
  readonly type: typeof REFRESH_TOKEN_SUCCESS;
}
export interface IRefreshTokenFailure {
  readonly type: typeof REFRESH_TOKEN_FAILURE;
}

export interface IGetUserRequest {
  readonly type: typeof GET_USER_REQUEST;
}
export interface IGetUserSuccess {
  readonly type: typeof GET_USER_SUCCESS;
  readonly payload: { user: UserType };
}
export interface IGetUserFailure {
  readonly type: typeof GET_USER_FAILURE;
}

export interface IUpdateUserRequest {
  readonly type: typeof UPDATE_USER_REQUEST;
}
export interface IUpdateUserSuccess {
  readonly type: typeof UPDATE_USER_SUCCESS;
  readonly payload: { user: UserType };
}
export interface IUpdateUserFailure {
  readonly type: typeof UPDATE_USER_FAILURE;
}

export type UserActions =
  | IRegisterRequest
  | IRegisterSuccess
  | IRegisterFailure
  | ILoginRequest
  | ILoginSuccess
  | ILoginFailure
  | ILogoutRequest
  | ILogoutSuccess
  | ILogoutFailure
  | IForgotPasswordRequest
  | IForgotPasswordSuccess
  | IForgotPasswordFailure
  | IResetPasswordRequest
  | IResetPasswordSuccess
  | IResetPasswordFailure
  | IRefreshTokenRequest
  | IRefreshTokenSuccess
  | IRefreshTokenFailure
  | IGetUserRequest
  | IGetUserSuccess
  | IGetUserFailure
  | IUpdateUserSuccess
  | IUpdateUserRequest
  | IUpdateUserFailure;

export const userRegister: AppThunk = (email, password, name) => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: REGISTER_REQUEST,
    });

    try {
      const res = await register(email, password, name);
      if (res && res.success) {
        const authToken = res.accessToken.split("Bearer ")[1];
        const refreshToken = res.refreshToken;
        setCookie("token", authToken);
        localStorage.setItem("refreshToken", refreshToken);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: { user: res.user },
        });
        // dispatch(push("/"));
      } else {
        throw new Error("User registration failed");
      }
    } catch (error) {
      dispatch({
        type: REGISTER_FAILURE,
      });
      console.log("There is a problem with your request: ", error.message);
    }
  };
};

export const userLogin: AppThunk = (email, password) => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });

    try {
      const res = await login(email, password);
      if (res && res.success) {
        const authToken = res.accessToken.split("Bearer ")[1];
        const refreshToken = res.refreshToken;
        setCookie("token", authToken);
        localStorage.setItem("refreshToken", refreshToken);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: res.user },
        });
      } else {
        throw new Error("User signIn is failed");
      }
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
      });
      console.log("There is a problem with your request: ", error.message);
    }
  };
};

export const userLogout: AppThunk = () => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    try {
      const res = await logout();
      if (res && res.success) {
        deleteCookie("token");
        localStorage.removeItem("refreshToken");
        dispatch({
          type: LOGOUT_SUCCESS,
        });
        dispatch(push("/login"));
      } else {
        throw new Error("Logout is failed");
      }
    } catch (error) {
      dispatch({
        type: LOGOUT_FAILURE,
      });
      console.log("There is a problem with your request: ", error.message);
    }
  };
};

export const userForgotPassword: AppThunk = (email) => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    });

    try {
      const res = await forgotPassword(email);
      if (res && res.success) {
        dispatch({
          type: FORGOT_PASSWORD_SUCCESS,
        });
        dispatch(push("/reset-password"));
      } else {
        throw new Error("Reset email can't be sent");
      }
    } catch (error) {
      dispatch({
        type: FORGOT_PASSWORD_FAILURE,
      });
      console.log("There is a problem with your request: ", error.message);
    }
  };
};

export const resetUserPassword: AppThunk = (password, token) => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    });

    try {
      const res = await resetPassword(password, token);
      if (res && res.success) {
        dispatch(push("/login"));
      } else {
        throw new Error("Reset password is failed");
      }
    } catch (error) {
      dispatch({
        type: RESET_PASSWORD_FAILURE,
      });
      console.log("There is a problem with your request: ", error.message);
    }
  };
};

export const refreshUserToken: AppThunk = () => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: REFRESH_TOKEN_REQUEST,
    });
    try {
      const res = await refreshToken();
      if (res && res.success) {
        localStorage.setItem("refreshToken", res.refreshToken);
        const authToken = res.accessToken.split("Bearer ")[1];
        setCookie("token", authToken);
        dispatch({
          type: REFRESH_TOKEN_SUCCESS,
        });
      } else {
        throw new Error("Refresh token is failed");
      }
    } catch (error) {
      dispatch({
        type: REFRESH_TOKEN_FAILURE,
      });
      console.log("There is a problem with your request: ", error.message);
    }
  };
};

export const getUserData: AppThunk = () => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    try {
      const res = await getUser();
      if (res && res.success) {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: { user: res.user },
        });
      } else {
        throw new Error("Getting user is failed");
      }
    } catch (error) {
      dispatch({
        type: GET_USER_FAILURE,
      });
      console.log("There is a problem with your request: ", error.message);
    }
  };
};

export const updateUserData: AppThunk = (name, email, password) => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });
    try {
      const res = await updateUser(name, email, password);
      if (res && res.success) {
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: { user: res.user },
        });
      } else {
        throw new Error("Updating user is failed");
      }
    } catch (error) {
      dispatch({
        type: UPDATE_USER_FAILURE,
      });
      console.log("There is a problem with your request: ", error.message);
    }
  };
};

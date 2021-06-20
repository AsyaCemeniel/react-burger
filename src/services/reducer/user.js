import {
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REFRESH_TOKEN_FAILURE,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../user-actions";

const initialState = {
  email: "",
  name: "",

  registrationRequest: false,
  registrationFailure: false,

  loginRequest: false,
  loginFailure: false,

  logoutRequest: false,
  logoutFailure: false,

  getUserRequest: false,
  getUserFailure: false,

  updateRequest: false,
  updateFailure: false,

  forgotRequest: false,
  forgotSuccess: false,
  forgotFailure: false,

  resetRequest: false,
  resetFailure: false,

  tokenRefreshRequest: false,
  tokenRefreshFailure: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        registrationRequest: true,
        registrationFailure: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        name: payload.user.name,
        email: payload.user.email,
        registrationRequest: false,
        registrationFailure: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registrationRequest: false,
        registrationFailure: true,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loginRequest: true,
        loginFailure: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        name: payload.user.name,
        email: payload.user.email,
        loginRequest: false,
        loginFailure: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginRequest: false,
        loginFailure: true,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        logoutRequest: true,
        logoutFailure: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        name: "",
        email: "",
        logoutRequest: false,
        logoutFailure: false,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        logoutRequest: false,
        logoutFailure: true,
      };
    case GET_USER_REQUEST:
      return {
        ...state,
        getUserRequest: true,
        getUserFailure: false,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        name: payload.user.name,
        email: payload.user.email,
        getUserRequest: false,
        getUserFailure: false,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        getUserRequest: false,
        getUserFailure: true,
      };
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        updateRequest: true,
        updateFailure: false,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        name: payload.user.name,
        email: payload.user.email,
        updateRequest: false,
        updateFailure: false,
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        updateRequest: false,
        updateFailure: true,
      };
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        forgotRequest: true,
        forgotSuccess: false,
        forgotFailure: false,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotRequest: false,
        forgotSuccess: true,
        forgotFailure: false,
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        forgotRequest: false,
        forgotSuccess: false,
        forgotFailure: true,
      };
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        resetRequest: true,
        resetFailure: false,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetRequest: false,
        resetFailure: false,
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        resetRequest: false,
        resetFailure: true,
      };
    case REFRESH_TOKEN_REQUEST:
      return {
        ...state,
        tokenRefreshRequest: true,
        tokenRefreshFailure: false,
      };
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        tokenRefreshRequest: false,
        tokenRefreshFailure: false,
      };
    case REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        tokenRefreshRequest: false,
        tokenRefreshFailure: true,
      };
    default:
      return state;
  }
};

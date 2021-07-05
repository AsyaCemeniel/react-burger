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
import user from "./user";

const state = {
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
  tokenRefreshSuccess: false,
  tokenRefreshFailure: false,
};

const userData = {
  email: "alma@bk.ru",
  name: "Alma",
};

describe("User reducer", () => {
  it("should return constructor to initial state", () => {
    expect(user(undefined, {})).toEqual(state);
  });

  it("should set registrationRequest to true", () => {
    expect(user(state, { type: REGISTER_REQUEST })).toEqual(
      expect.objectContaining({ registrationRequest: true })
    );
  });

  it("should set registrationFailure to true", () => {
    expect(user(state, { type: REGISTER_FAILURE })).toEqual(
      expect.objectContaining({ registrationFailure: true })
    );
  });

  it("should set user email and name", () => {
    expect(
      user(state, { type: REGISTER_SUCCESS, payload: { user: userData } })
    ).toEqual(expect.objectContaining(userData));
  });

  it("should set loginRequest to true", () => {
    expect(user(state, { type: LOGIN_REQUEST })).toEqual(
      expect.objectContaining({ loginRequest: true })
    );
  });

  it("should set loginFailure to true", () => {
    expect(user(state, { type: LOGIN_FAILURE })).toEqual(
      expect.objectContaining({ loginFailure: true })
    );
  });

  it("should set user email and name for login", () => {
    expect(
      user(state, { type: LOGIN_SUCCESS, payload: { user: userData } })
    ).toEqual(expect.objectContaining(userData));
  });

  it("should set logoutRequest to true", () => {
    expect(user(state, { type: LOGOUT_REQUEST })).toEqual(
      expect.objectContaining({ logoutRequest: true })
    );
  });

  it("should set logoutFailure to true", () => {
    expect(user(state, { type: LOGOUT_FAILURE })).toEqual(
      expect.objectContaining({ logoutFailure: true })
    );
  });

  it("should delete name and email after logout", () => {
    expect(user(state, { type: LOGOUT_SUCCESS })).toEqual(
      expect.objectContaining({ email: "", name: "" })
    );
  });

  it("should set getUserRequest to true", () => {
    expect(user(state, { type: GET_USER_REQUEST })).toEqual(
      expect.objectContaining({ getUserRequest: true })
    );
  });

  it("should set getUserFailure to true", () => {
    expect(user(state, { type: GET_USER_FAILURE })).toEqual(
      expect.objectContaining({ getUserFailure: true })
    );
  });

  it("should set email and name after getting user", () => {
    expect(
      user(state, { type: GET_USER_SUCCESS, payload: { user: userData } })
    ).toEqual(expect.objectContaining(userData));
  });

  it("should set updateRequest to true", () => {
    expect(user(state, { type: UPDATE_USER_REQUEST })).toEqual(
      expect.objectContaining({ updateRequest: true })
    );
  });

  it("should set updateFailure to true", () => {
    expect(user(state, { type: UPDATE_USER_FAILURE })).toEqual(
      expect.objectContaining({ updateFailure: true })
    );
  });

  it("should set email and name to update user", () => {
    expect(
      user(state, { type: UPDATE_USER_SUCCESS, payload: { user: userData } })
    ).toEqual(expect.objectContaining(userData));
  });

  it("should set forgotRequest to true", () => {
    expect(user(state, { type: FORGOT_PASSWORD_REQUEST })).toEqual(
      expect.objectContaining({ forgotRequest: true })
    );
  });

  it("should set forgotFailure to true", () => {
    expect(user(state, { type: FORGOT_PASSWORD_FAILURE })).toEqual(
      expect.objectContaining({ forgotFailure: true })
    );
  });

  it("should set forgotSuccess to true", () => {
    expect(user(state, { type: FORGOT_PASSWORD_SUCCESS })).toEqual(
      expect.objectContaining({ forgotSuccess: true })
    );
  });

  it("should set resetRequest to true", () => {
    expect(user(state, { type: RESET_PASSWORD_REQUEST })).toEqual(
      expect.objectContaining({ resetRequest: true })
    );
  });

  it("should set resetFailure to true", () => {
    expect(user(state, { type: RESET_PASSWORD_FAILURE })).toEqual(
      expect.objectContaining({ resetFailure: true })
    );
  });

  it("should set resetFailure and resetRequest to false", () => {
    expect(user(state, { type: RESET_PASSWORD_SUCCESS })).toEqual(
      expect.objectContaining({ resetRequest: false, resetFailure: false })
    );
  });

  it("should set tokenRefreshRequest to true", () => {
    expect(user(state, { type: REFRESH_TOKEN_REQUEST })).toEqual(
      expect.objectContaining({ tokenRefreshRequest: true })
    );
  });

  it("should set tokenRefreshFailure to true", () => {
    expect(user(state, { type: REFRESH_TOKEN_FAILURE })).toEqual(
      expect.objectContaining({ tokenRefreshFailure: true })
    );
  });

  it("should set tokenRefreshSuccess to true", () => {
    expect(user(state, { type: REFRESH_TOKEN_SUCCESS })).toEqual(
      expect.objectContaining({ tokenRefreshSuccess: true })
    );
  });
});

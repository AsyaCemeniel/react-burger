import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUserToken } from "../../services/user-actions";

const ProtectedRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();

  const { tokenRefreshSuccess } = useSelector((store) => store.user);
  const isToken = !!localStorage.getItem("refreshToken");

  useEffect(() => {
    if (!tokenRefreshSuccess && isToken) {
      dispatch(refreshUserToken());
    }
  }, [dispatch, tokenRefreshSuccess, isToken]);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        tokenRefreshSuccess && isToken ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;

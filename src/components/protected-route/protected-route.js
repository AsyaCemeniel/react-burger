import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUserToken } from "../../services/user-actions";

const ProtectedRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();

  const { tokenRefreshSuccess } = useSelector((store) => store.user);
  const isToken = !!localStorage.getItem("refreshToken");

  // useEffect(() => {
  //   if (isToken) {
  //     dispatch(refreshUserToken());
  //   }
  // }, []);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isToken ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;

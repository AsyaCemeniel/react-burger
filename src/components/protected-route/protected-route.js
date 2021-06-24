import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { useEffect } from "react"; // eslint-disable-line
import { useDispatch } from "react-redux"; // eslint-disable-line
import { refreshUserToken } from "../../services/user-actions"; // eslint-disable-line

const ProtectedRoute = ({ children, ...rest }) => {
  // const dispatch = useDispatch();

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

ProtectedRoute.propTypes = {
  children: PropTypes.element,
};

export default ProtectedRoute;

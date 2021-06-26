import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { useEffect } from "react"; // eslint-disable-line
import { useDispatch, useSelector } from "react-redux"; // eslint-disable-line
import { refreshUserToken } from "../../services/user-actions"; // eslint-disable-line
import Loader from "../loader";

const ProtectedRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();

  const isToken = !!localStorage.getItem("refreshToken");
  const userEmail = useSelector((store) => store.user.email);
  const tokenRefreshSuccess = useSelector(
    (store) => store.user.tokenRefreshSuccess
  );

  useEffect(() => {
    if (!userEmail && isToken) {
      dispatch(refreshUserToken());
    }
  }, []);

  // if (isToken && !userEmail) {
  //   return <Loader />;
  // }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isToken && tokenRefreshSuccess ? (
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

import React, { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import { useEffect } from "react"; // eslint-disable-line
import { useDispatch, useSelector } from "react-redux"; // eslint-disable-line
import { getUserData } from "../../services/user-actions"; // eslint-disable-line
import Loader from "../loader";

const ProtectedRoute: FC<{
  path: string;
  exact?: boolean;
}> = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const userEmail = useSelector((store: any) => store.user.email);
  const isToken = !!localStorage.getItem("refreshToken");

  const getUserRequest = useSelector((store: any) => store.user.getUserRequest);

  useEffect(() => {
    if (isToken && !userEmail) {
      dispatch(getUserData());
    }
  }, []);

  if (getUserRequest && isToken && !userEmail) {
    return <Loader />;
  }

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

import React, { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "../../hooks";
import { getUserData } from "../../services/user-actions";
import Loader from "../loader";

const ProtectedRoute: FC<{
  path: string;
  exact?: boolean;
}> = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const userEmail = useSelector((store) => store.user.email);
  const isToken = !!localStorage.getItem("refreshToken");

  const getUserRequest = useSelector((store) => store.user.getUserRequest);

  useEffect(() => {
    if (isToken && !userEmail) {
      dispatch(getUserData());
    }
  }, []);

  if (getUserRequest && isToken && !userEmail) {
    return (
      <div
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader />
      </div>
    );
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

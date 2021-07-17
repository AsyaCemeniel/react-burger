import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import UserForm from "../../components/user-form";
import { getUserData } from "../../services/user-actions";
import Loader from "../../components/loader";

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector((store: any) => store.user.email);
  const { getUserRequest } = useSelector((store: any) => store.user);

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  if (getUserRequest) {
    return <Loader />;
  }

  const title = "Восстановление пароля";
  const links = (
    <>
      <span className={`text text_type_main-default`}>
        Вспомнили пароль?
        <Link to={{ pathname: "/login" }}>Войти</Link>
      </span>
    </>
  );

  if (userEmail && localStorage.getItem("refreshToken")) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  return <UserForm title={title} links={links} type="forgot-password" />;
};

export default ForgotPasswordPage;

import React from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import UserForm from "../../components/user-form";

const LoginPage = () => {
  const userEmail = useSelector((store) => store.user.email);
  const userToken = localStorage.getItem("refreshToken");

  const title = "Вход";
  const links = (
    <>
      <span className={`text text_type_main-default`}>
        Вы — новый пользователь?
        <Link to={{ pathname: "/register" }}>Зарегистрироваться</Link>
      </span>
      <span className={`text text_type_main-default`}>
        Забыли пароль?
        <Link to={{ pathname: "/forgot-password" }}>Восстановить пароль</Link>
      </span>
    </>
  );

  if (userEmail || userToken) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  return <UserForm title={title} links={links} type="login" />;
};

export default LoginPage;

import React from "react";
import { useSelector } from "../../hooks";
import { Link, Redirect, useLocation } from "react-router-dom";
import UserForm from "../../components/user-form";

const LoginPage = () => {
  const location = useLocation<{ from: { pathname: string } }>();
  const userEmail = useSelector((store) => store.user.email);
  // const userToken = localStorage.getItem("refreshToken");

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

  if (userEmail) {
    const { from } = location.state || { from: { pathname: "/" } };

    return <Redirect to={from} />;
  }

  return <UserForm title={title} links={links} type="login" />;
};

export default LoginPage;

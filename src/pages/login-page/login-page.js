import React from "react";
import { Link } from "react-router-dom";
import UserForm from "../../components/user-form";

const LoginPage = () => {
  const title = "Вход";
  const linkText = (
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

  return <UserForm title={title} linkText={linkText} type="login" />;
};

export default LoginPage;

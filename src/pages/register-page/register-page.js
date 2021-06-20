import React from "react";
import { Link, Redirect } from "react-router-dom";
import UserForm from "../../components/user-form";

const RegisterPage = () => {
  const title = "Регистрация";
  const links = (
    <>
      <span className={`text text_type_main-default`}>
        Уже зарегистрированы?
        <Link to={{ pathname: "/login" }}>Войти</Link>
      </span>
    </>
  );

  if (localStorage.getItem("refreshToken")) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  return <UserForm title={title} links={links} type="register" />;
};

export default RegisterPage;

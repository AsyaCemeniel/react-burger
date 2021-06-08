import React from "react";
import { Link } from "react-router-dom";
import UserForm from "../../components/user-form";

const RegisterPage = () => {
  const title = "Регистрация";
  const linkText = (
    <>
      <span className={`text text_type_main-default`}>
        Уже зарегистрированы?
        <Link to={{ pathname: "/login" }}>Войти</Link>
      </span>
    </>
  );

  return <UserForm title={title} linkText={linkText} type="register" />;
};

export default RegisterPage;

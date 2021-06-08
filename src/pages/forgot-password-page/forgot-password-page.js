import React from "react";
import { Link } from "react-router-dom";
import UserForm from "../../components/user-form";

const ForgotPasswordPage = () => {
  const title = "Восстановление пароля";
  const linkText = (
    <>
      <span className={`text text_type_main-default`}>
        Вспомнили пароль?
        <Link to={{ pathname: "/login" }}>Войти</Link>
      </span>
    </>
  );

  return <UserForm title={title} linkText={linkText} type="forgot-password" />;
};

export default ForgotPasswordPage;

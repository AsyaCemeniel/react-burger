import React from "react";
import { Link } from "react-router-dom";
import UserForm from "../../components/user-form";

const ResetPasswordPage = () => {
  const title = "Восстановление пароля";
  const links = (
    <>
      <span className={`text text_type_main-default`}>
        Вспомнили пароль?
        <Link to={{ pathname: "/login" }}>Войти</Link>
      </span>
    </>
  );

  return <UserForm title={title} links={links} type="reset-password" />;
};

export default ResetPasswordPage;

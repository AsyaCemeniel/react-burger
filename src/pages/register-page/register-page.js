import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import UserForm from "../../components/user-form";
import { getUserData } from "../../services/user-actions";
import Loader from "../../components/loader";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector((store) => store.user.email);
  const { getUserRequest } = useSelector((store) => store.user);

  const title = "Регистрация";
  const links = (
    <>
      <span className={`text text_type_main-default`}>
        Уже зарегистрированы?
        <Link to={{ pathname: "/login" }}>Войти</Link>
      </span>
    </>
  );

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  if (getUserRequest) {
    return <Loader />;
  }

  if (userEmail && localStorage.getItem("refreshToken")) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  return <UserForm title={title} links={links} type="register" />;
};

export default RegisterPage;

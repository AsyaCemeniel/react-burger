import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  resetUserPassword,
  userForgotPassword,
  userLogin,
  userRegister,
} from "../../services/user-actions";
import styles from "./user-form.module.css";

const UserForm = ({ title, links, type }) => {
  const dispatch = useDispatch();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(userLogin(emailValue, passwordValue));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    dispatch(userRegister(emailValue, passwordValue, nameValue));
  };

  const handleCodeSend = (event) => {
    event.preventDefault();
    dispatch(userForgotPassword(emailValue));
  };

  const handlePasswordRenew = (event) => {
    event.preventDefault();
    dispatch(resetUserPassword(passwordValue, nameValue));
  };

  const createContent = () => {
    switch (type) {
      case "login":
        return (
          <>
            <Input
              type="email"
              placeholder="E-mail"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <PasswordInput
              value={passwordValue}
              name="password"
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <Button type="primary" size="medium" onClick={handleLogin}>
              Войти
            </Button>
          </>
        );
      case "register":
        return (
          <>
            <Input
              type="text"
              placeholder="Имя"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            />
            <Input
              type="email"
              placeholder="E-mail"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <PasswordInput
              value={passwordValue}
              name="password"
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <Button type="primary" size="medium" onClick={handleRegister}>
              Зарегистрироваться
            </Button>
          </>
        );
      case "forgot-password":
        return (
          <>
            <Input
              type="email"
              placeholder="Укажите e-mail"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <Button type="primary" size="medium" onClick={handleCodeSend}>
              Восстановить
            </Button>
          </>
        );
      case "reset-password":
        return (
          <>
            <Input
              type="password"
              placeholder="Введите новый пароль"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              icon={"ShowIcon"}
            />
            <Input
              type="text"
              placeholder="Введите код из письма"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            />
            <Button type="primary" size="medium" onClick={handlePasswordRenew}>
              Сохранить
            </Button>
          </>
        );
    }
  };

  const content = createContent() || "";

  return (
    <div className={styles.main}>
      <span className={`text text_type_main-medium mb-3`}>{title}</span>
      <form className={styles.form}>{content}</form>
      <div className={styles.link}>{links}</div>
    </div>
  );
};

//TODO propsTypes

export default UserForm;

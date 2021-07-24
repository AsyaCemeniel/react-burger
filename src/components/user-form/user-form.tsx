import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC, SyntheticEvent } from "react";
import { useState } from "react";
import { useDispatch } from "../../hooks";
import {
  resetUserPassword,
  userForgotPassword,
  userLogin,
  userRegister,
} from "../../services/user-actions";
import styles from "./user-form.module.css";
import { FormType } from "./types";

const UserForm: FC<FormType> = ({ title, links, type }) => {
  const dispatch = useDispatch();

  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");

  const handleLogin = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(userLogin(emailValue, passwordValue));
  };

  const handleRegister = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(userRegister(emailValue, passwordValue, nameValue));
  };

  const handleCodeSend = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(userForgotPassword(emailValue));
  };

  const handlePasswordRenew = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(resetUserPassword(passwordValue, nameValue));
  };

  const createContent = () => {
    switch (type) {
      case "login":
        return (
          <form onSubmit={handleLogin} className={styles.form}>
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
            <Button type="primary" size="medium">
              Войти
            </Button>
          </form>
        );
      case "register":
        return (
          <form onSubmit={handleRegister} className={styles.form}>
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
            <Button type="primary" size="medium">
              Зарегистрироваться
            </Button>
          </form>
        );
      case "forgot-password":
        return (
          <form onSubmit={handleCodeSend} className={styles.form}>
            <Input
              type="email"
              placeholder="Укажите e-mail"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <Button type="primary" size="medium">
              Восстановить
            </Button>
          </form>
        );
      case "reset-password":
        return (
          <form onSubmit={handlePasswordRenew} className={styles.form}>
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
            <Button type="primary" size="medium">
              Сохранить
            </Button>
          </form>
        );
    }
  };

  const content = createContent() || "";

  return (
    <div className={styles.main}>
      <span className={`text text_type_main-medium mb-3`}>{title}</span>
      <div>{content}</div>
      <div className={styles.link}>{links}</div>
    </div>
  );
};

export default UserForm;

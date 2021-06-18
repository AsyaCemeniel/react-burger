import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useState } from "react";
import {
  forgotPassword,
  login,
  register,
  resetPassword,
} from "../../utils/burger-api";
import styles from "./user-form.module.css";

const UserForm = ({ title, links, type }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    login(nameValue, passwordValue)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleRegister = (event) => {
    event.preventDefault();

    console.log(emailValue, passwordValue, nameValue);
    register(emailValue, passwordValue, nameValue)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleCodeSend = (event) => {
    event.preventDefault();

    forgotPassword(emailValue)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handlePasswordRenew = (event) => {
    event.preventDefault();

    resetPassword(passwordValue, nameValue)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
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

export default UserForm;

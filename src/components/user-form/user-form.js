import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

const UserForm = ({ tittle, linkText, type }) => {
  let EmailValue = "";
  let passwordValue = "";
  let nameValue = "";
  const handleInputChange = () => {};
  const handleLogin = () => {};
  const handleRegister = () => {};
  const handleCodSend = () => {};
  const handlePasswordRenew = () => {};

  const createContent = () => {
    switch (type) {
      case "login":
        return (
          <>
            <Input
              type="email"
              placeholder="E-mail"
              value={EmailValue}
              onChange={handleInputChange}
            />
            <PasswordInput
              value={passwordValue}
              name="password"
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
            <Input
              type="email"
              placeholder="E-mail"
              value={EmailValue}
              onChange={handleInputChange}
            />
            <PasswordInput
              value={passwordValue}
              name="password"
              onChange={handleInputChange}
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
              value={EmailValue}
              onChange={handleInputChange}
            />
            <Button type="primary" size="medium" onClick={handleCodSend}>
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
              onChange={handleInputChange}
              icon={"ShowIcon"}
            />
            <Input
              type="text"
              placeholder="Введите код из письма"
              value={nameValue}
              onChange={handleInputChange}
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
    <div>
      <span className={`text text_type_main-medium`}>{tittle}</span>
      <form>{content}</form>
      <span className={`text text_type_main-default`}>{linkText}</span>
    </div>
  );
};

export default UserForm;

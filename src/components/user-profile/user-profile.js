import {
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import styles from "./user-profile.module.css";

const UserProfile = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  return (
    <form className={`${styles.main}`}>
      <div className={`mb-6 `}>
        <Input
          type="text"
          placeholder="Имя"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          icon="EditIcon"
        />
      </div>
      <div className={`mb-6 `}>
        <EmailInput
          value={emailValue}
          name="email"
          onChange={(e) => setEmailValue(e.target.value)}
        />
      </div>
      <div>
        <Input
          type="password"
          placeholder="Пароль"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          icon="EditIcon"
        />
      </div>
    </form>
  );
};

export default UserProfile;

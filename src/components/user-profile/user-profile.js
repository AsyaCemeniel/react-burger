import {
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from "./user-profile.module.css";

const UserProfile = () => {
  let nameValue = "";
  let EmailValue = "";
  let passwordValue = "";
  const handleInputChange = () => {};

  return (
    <div className={`${styles.main}`}>
      <div className={`mb-6 `}>
        <Input
          type="text"
          placeholder="Имя"
          value={nameValue}
          onChange={handleInputChange}
          icon="EditIcon"
        />
      </div>
      <div className={`mb-6 `}>
        <EmailInput
          value={EmailValue}
          name="email"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Input
          type="password"
          placeholder="Пароль"
          value={passwordValue}
          onChange={handleInputChange}
          icon="EditIcon"
        />
      </div>
    </div>
  );
};

export default UserProfile;

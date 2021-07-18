import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { SyntheticEvent, useState } from "react";
import { useDispatch, useSelector } from "../../hooks";
import { updateUserData } from "../../services/user-actions";
import styles from "./user-profile.module.css";

const UserProfile = () => {
  const dispatch = useDispatch();

  const currentName = useSelector((store) => store.user.name);
  const currentEmail = useSelector((store) => store.user.email);

  const [emailValue, setEmailValue] = useState(currentEmail);
  const [passwordValue, setPasswordValue] = useState("");
  const [nameValue, setNameValue] = useState(currentName);

  const [isFocusEmail, setEmailFocus] = useState(false);
  const [isFocusPassword, setPasswordFocus] = useState(false);
  const [isFocusName, setNameFocus] = useState(false);

  const handleCancel = (event: SyntheticEvent) => {
    event.preventDefault();
    setNameValue(currentName);
    setEmailValue(currentEmail);
    setPasswordValue("");
  };

  const handleSave = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(updateUserData(nameValue, emailValue, passwordValue));
  };

  const nameIcon = isFocusName ? "CloseIcon" : "EditIcon";
  const emailIcon = isFocusEmail ? "CloseIcon" : "EditIcon";
  const passwordIcon = isFocusPassword ? "CloseIcon" : "EditIcon";

  const isDataChanged =
    nameValue !== currentName ||
    emailValue !== currentEmail ||
    passwordValue.length > 0;

  return (
    <form className={`${styles.main}`} onSubmit={handleSave}>
      <div className={`mb-6 `}>
        <Input
          type="text"
          placeholder="Имя"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          onFocus={() => setNameFocus(true)}
          onBlur={() => setNameFocus(false)}
          onIconClick={() => setNameValue(currentName)}
          icon={nameIcon}
        />
      </div>
      <div className={`mb-6 `}>
        <Input
          type="email"
          placeholder="Email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          onIconClick={() => setEmailValue(currentEmail)}
          icon={emailIcon}
        />
      </div>
      <div>
        <Input
          type="password"
          placeholder="Пароль"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
          onIconClick={() => setPasswordValue("")}
          icon={passwordIcon}
        />
      </div>
      {isDataChanged ? (
        <div className="mt-6">
          <span className={styles.button} onClick={handleCancel}>
            Отмена
          </span>
          <Button type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      ) : null}
    </form>
  );
};

export default UserProfile;

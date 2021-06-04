import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

const Tabs = ({ titles, setCurrent, current }) => {
  return (
    <div style={{ display: "flex" }}>
      {titles.map((title) => (
        <Tab
          key={title.key}
          value={title.type}
          active={current === title.type}
          className="text text_type_main-default"
          onClick={setCurrent}
        >
          {title.name}
        </Tab>
      ))}
    </div>
  );
};

export default Tabs;

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

const Tabs = ({ titles }) => {
  const [current, setCurrent] = React.useState("one");
  return (
    <div style={{ display: "flex" }}>
      {titles.map((title) => (
        <Tab
          key={title.key}
          value={title.name}
          active={current === title.name}
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

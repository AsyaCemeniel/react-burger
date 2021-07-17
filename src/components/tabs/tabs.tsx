import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC } from "react";
import { TabsProps } from "./types";

const Tabs: FC<TabsProps> = ({ titles, setCurrent, current }) => {
  return (
    <div style={{ display: "flex" }} className="text text_type_main-default">
      {titles.map((title) => (
        <Tab
          key={title.key}
          value={title.type}
          active={current === title.type}
          onClick={setCurrent}
        >
          {title.name}
        </Tab>
      ))}
    </div>
  );
};

export default Tabs;

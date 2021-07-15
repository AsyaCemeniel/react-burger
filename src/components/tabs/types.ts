import { Dispatch, SetStateAction } from "react";

type TitleType = {
  name: string;
  key: string;
  type: string;
};

export type TabsProps = {
  titles: TitleType[];
  setCurrent: Dispatch<SetStateAction<string>>;
  current: string;
};

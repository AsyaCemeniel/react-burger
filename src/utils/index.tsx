import { CookiePropsType, IngredientType, OrderType } from "../types";

export const getCookie = (name: string) => {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + // eslint-disable-line
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const setCookie = (
  name: string,
  value: string | number | boolean,
  props?: CookiePropsType
) => {
  props = {
    path: "/",
    ...props,
  };
  let exp = props.expires;
  const d = new Date();
  if (typeof exp == "number" && exp) {
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = +d;
  }
  if (exp && d.toUTCString) {
    props.expires = d.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
};

export const deleteCookie = (name: string) => {
  setCookie(name, false, { expires: -1 });
};

export const calculateTotalPrice = (
  ingredients: IngredientType[] | undefined,
  bun?: IngredientType | null
) => {
  if (!ingredients) return 0;
  return (
    ingredients?.reduce((total, item) => total + item?.price, 0) +
    (bun?.price || 0) * 2
  );
};

export const getOrderIngredients = (
  ingredients: IngredientType[],
  ids: string[]
) => {
  if (!ingredients || ingredients.length === 0 || !ids || ids.length === 0)
    return;
  const result = ids.map((id) => {
    const ingredient = ingredients?.filter((item) => item._id === id)[0];
    const count = ids.filter((idForCount) => idForCount === id).length;
    if (ingredient) {
      ingredient.count = count;
    }
    return ingredient;
  });
  return result.filter((item) => !!item);
};

const CurrentDay = (dayCount: number) =>
  dayCount === 0
    ? "Сегодня"
    : dayCount === 1
    ? "Вчера"
    : `${dayCount} дня(-ей) назад`;

export const getOrderDate = (date: string) => {
  const CreatedDate = new Date(date);
  const CurrentDate = new Date().setHours(0, 0, 0, 0);

  const dayCount = Math.ceil(
    (CurrentDate - CreatedDate.getTime()) / (60 * 60 * 24 * 1000)
  );
  const hours =
    CreatedDate.getHours() > 9
      ? CreatedDate.getHours()
      : `0${CreatedDate.getHours()}`;
  const minutes =
    CreatedDate.getMinutes() > 9
      ? CreatedDate.getMinutes()
      : `0${CreatedDate.getMinutes()}`;

  return `${CurrentDay(dayCount)}, ${hours}:${minutes} i-GMT+${
    (CreatedDate.getTimezoneOffset() * -1) / 60
  }`;
};

export const sortByStatus = (orders: OrderType[] | undefined) => {
  if (!orders || orders.length === 0) return;
  return orders.reduce(
    (result: { [name: string]: number[] }, order) => {
      if (order.status === "done") result.done.push(order.number);
      if (order.status === "pending") result.pending.push(order.number);

      return result;
    },
    { done: [], pending: [] }
  );
};

export const divideIntoColumns = (orders: number[] | undefined) => {
  if (!orders || orders.length === 0) return;
  const firstColumn = orders.slice(0, 10);
  const secondColumn = orders.slice(10, 20);

  return { firstColumn, secondColumn };
};

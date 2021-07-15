export type IngredientType = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v?: number;
  count?: number;
};

export type IngredientWithKeyType = {
  key: string;
  item: IngredientType;
};

export type OrderType = {
  createdAt: string;
  ingredients: Array<string>;
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
};

export type OrderInfoType = {
  name: string;
  order: { number: number };
  success: boolean;
};

export type UserType = {
  email: string;
  name?: string;
  password: string;
};

export type UserDataType = {
  email: string;
  name: string;
  password?: string;
};

export type ResetPasswordType = {
  password: string;
  token: string;
};

export type CookiePropsType = {
  expires?: number | string;
  path?: string;
} & { [extraParams: string]: string | number | boolean };

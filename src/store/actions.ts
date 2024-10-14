import { ProductItem } from "./reducers/reducers";

export const addProduct = (product: ProductItem) => ({
  type: "ADD",
  payload: product,
});

export const editProduct = (product: ProductItem) => ({
  type: "EDIT",
  payload: product,
});

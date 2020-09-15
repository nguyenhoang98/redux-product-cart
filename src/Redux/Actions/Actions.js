import * as types from "../Constants/index";

export const add_product = (product, quantity) => {
  return {
    type: types.ADD_PRODUCT,
    payload: {
      product,
      quantity,
    },
  };
};

export const del_product = (product) => {
  return {
    type: types.DEL_PRODUCT,
    payload: {
      product,
    },
  };
};

export const update_product = (product, count) => {
  return {
    type: types.UPDATE_PRODUCT,
    payload: {
      product,
      count,
    },
  };
};

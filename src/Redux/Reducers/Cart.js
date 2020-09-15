import * as types from "../Constants/index";
var data = JSON.parse(localStorage.getItem("products"));
var initialState = data ? data : [];

var reducer = (state = initialState, action) => {
  if (action.type === types.ADD_PRODUCT) {
    const { product, quantity } = action.payload;
    let index = state.findIndex((value) => {
      return value.product.id === product.id;
    });
    if (index !== -1) {
      state[index].quantity += 1;
    } else {
      state.push({
        product: product,
        quantity: quantity,
      });
    }
    localStorage.setItem("products", JSON.stringify(state));
    return [...state];
  }
  if (action.type === types.DEL_PRODUCT) {
    const { product } = action.payload;
    let index = state.findIndex((value) => {
      return value.product.id === product.product.id;
    });
    state.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(state));
    return [...state];
  }
  if (action.type === types.UPDATE_PRODUCT) {
    const { product, count } = action.payload;
    let index = state.findIndex((value) => {
      return value.product.id === product.product.id;
    });
    if (state[index].quantity > 0) {
      state[index].quantity += count;
    }
    if (state[index].quantity <= 0) {
      state.splice(index, 1);
    }
    localStorage.setItem("products", JSON.stringify(state));
    return [...state];
  }
  return state;
};
export default reducer;

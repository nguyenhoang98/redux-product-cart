import * as typesMsg from "../Constants/message";
import * as types from "../Constants/index";
var initialState = typesMsg.WELCOME_WEBISDE;

var reducer = (state = initialState, action) => {
  if (action.type === types.ADD_PRODUCT) {
    state = typesMsg.ADD_SUCCESS;
  }
  if (action.type === types.DEL_PRODUCT) {
    state = typesMsg.DEL_SUCCESS;
  }
  if (action.type === types.UPDATE_PRODUCT) {
    state = typesMsg.UPDATE_SUCCES;
  }
  return state;
};
export default reducer;

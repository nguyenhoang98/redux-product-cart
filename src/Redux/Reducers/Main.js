import { combineReducers } from "redux";
import Products from "./Products";
import Cart from "./Cart";
import Message from "./Message";
var appReducers = combineReducers({
  Products: Products,
  Cart: Cart,
  Message: Message,
});
export default appReducers;

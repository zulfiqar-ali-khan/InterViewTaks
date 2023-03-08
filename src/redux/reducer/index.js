import { combineReducers } from "redux";
import cartReducer from "./CartReducer";

import thunk from "redux-thunk";

export default combineReducers(
  {
    cart: cartReducer,
  },
  thunk
);


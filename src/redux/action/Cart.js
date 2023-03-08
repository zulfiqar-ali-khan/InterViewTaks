import {
  ADD_TO_CART,
  REMOVE_ITEM,
  CLEAR_CARD,
  ADD_QUANTITY
} from "./type";

//add cart action
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};


//add cart action
export const addquantity = (product) => {
  return {
    type: ADD_QUANTITY,
    payload: product,
  };
};


//remove item action
export const removeItem = (product) => {
  return {
    type: REMOVE_ITEM,
    payload: product,
  };
};

//remove item action
export const clearcard = () => {
  return {
    type: CLEAR_CARD,
  };
};

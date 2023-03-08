import {
  ADD_TO_CART,
  REMOVE_ITEM,
  CLEAR_CARD,
  ADD_QUANTITY
} from "../action/type";

const initState = {
  addedItems: [],
  total: 0,
  totalProduct: 0,
};

export const cartReducer = (state = initState, action) => {

  if (action.type === ADD_TO_CART) {
    // eslint-disable-next-line array-callback-return
    let existed_item = state.addedItems.find((item) => action.payload.id === item.id);

    if (existed_item) {
      existed_item.quantity += 1;
      return {
        ...state,
        total: state.total + existed_item.price,
        // totalProduct: totalItemsAdded,
      };
    } else {
      action.payload.quantity = 1;
      let newTotal = parseInt(state.total) + parseInt(action.payload.price);
      return {
        ...state,
        addedItems: [...state.addedItems, action.payload],
        total: newTotal,
        totalProduct: state.totalProduct + action.payload.quantity,
      };
    }
  }

  if (action.type === REMOVE_ITEM) {

    let itemToBeRemoved = state.addedItems.find(
      (item) => action.payload.id === item.id
    );

    let new_items = state.addedItems.filter(
      (item) => action.payload.id !== item.id
    );

    let newTotal =
      state.total - itemToBeRemoved.price * itemToBeRemoved.quantity;
    let totalItemsAdded;
    if (state.addedItems.length <= itemToBeRemoved.quantity) {
      totalItemsAdded = 0
    } else {
      totalItemsAdded = state.addedItems.length - itemToBeRemoved.quantity;
    }


    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
      totalProduct: totalItemsAdded,
    };
  }

  if (action.type === CLEAR_CARD) {
    return {
      addedItems: [],
      total: 0,
      totalProduct: 0,
    };
  }



  if (action.type == ADD_QUANTITY) {

    let item = state.addedItems.find(item => item.id === action.payload.id);
    item.quantity += 1;
    let newTotal = state.total + item.price;
    return {
      ...state,
      total: newTotal,
      totalProduct: state.totalProduct + 1,
    }
  }
  return state;
};
export default cartReducer;

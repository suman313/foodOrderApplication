import * as actionTypes from "./pageTypes";
export const addToCart = (itemId) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemId,
    },
  };
};
export const removeFromCart = (itemId) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};
export const updateQty = (itemId, value) => {
  return {
    type: actionTypes.UPDATE_QTY,
    payload: {
      id: itemId,
      qty: value,
    },
  };
};
export const loadClickedItems = (item) => {
  return {
    type: actionTypes.LOAD_CLICKED_ITEM,
    payload: {
      id: item,
    },
  };
};

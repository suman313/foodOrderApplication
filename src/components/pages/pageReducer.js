import * as actionTypes from "./pageTypes";

const default_state = {
  items: [
    {
      id: 1,
      title: "Veg Thali",
      price: 80,
      details:
        "The vegetarian Kerala style lunch consists of boiled rice along with five varities of traditional dishes. ",
      image:
        "https://5.imimg.com/data5/HU/PG/OE/SELLER-9770898/special-veg-thali-500x500.jpg",
    },
    {
      id: 2,
      title: "Home made lunch Thali (Non-Veg)",
      price: 120,
      details:
        "Home made thali contains plain rice, Dal, Kosha murgir mangsho with alu sobji, alu vaja, papad and chatni.",
      image:
        "https://4.imimg.com/data4/UU/FC/ANDROID-28469914/product-500x500.jpeg",
    },
    {
      id: 3,
      title: "The third Item",
      price: 125,
      details:
        "Indian, Seafood, Asian, Vegetarian Friendly, Vegan Options, Lunch, Dinner",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/18/de/30/ce/img-20190819-144555-01.jpg",
    },
  ], // {id, title, price, details, img}
  cart: [], // {id, title, price, details, img, qty}
  currentItem: null,
};

const pageReducer = (state = default_state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.items.find((item) => item.id == action.payload.id);
      const inCart = state.cart.find(
        (cartItem) => cartItem.id == action.payload.id
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, qty: cartItem.qty + 1 }
                : cartItem
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
      break;
    case actionTypes.REMOVE_FROM_CART:
      const findItemFromCart = state.cart.find(
        (item) => item.id == action.payload.id
      );
      const findTheIndex = state.cart.indexOf(findItemFromCart);
      const copyPreviousItems = state.cart.slice(0, findTheIndex);
      const copyNextItems = state.cart.slice(findTheIndex + 1);
      const newCopiedCart = copyPreviousItems.concat(copyNextItems);
      return {
        ...state,
        cart: newCopiedCart,
      };
      break;
    case actionTypes.UPDATE_QTY:
      // const findTheIndexInCart = state.cart.find((item)=>{
      //   item.id == action.payload.id
      // })
      // const
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id == action.payload.id
            ? { ...item, qty: parseInt(action.payload.qty) }
            : item
        ),
      };
      break;
    case actionTypes.LOAD_CLICKED_ITEM:
      return {};
      break;
    default:
      return state;
      break;
  }
};
export default pageReducer;

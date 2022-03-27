import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { removeFromCart, updateQty } from "../../pages/pageActions";

function CartItem({ items, deleteCartItem, updateItemQty }) {
  const [input, setInput] = useState(items.qty);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    let currentQty = e.target.value;
    console.log(currentQty);
    updateItemQty(items.id, currentQty);
  };
  return (
    <div className="card">
      <img className="item-image" src={items.image} />
      <h4>{items.title}</h4>
      <p className="details">{items.details}</p>
      <p className="price">Rs. {items.price}</p>
      <div className="cart_qty">
        <label>Quantity</label>
        <input
          min={1}
          type="number"
          value={input}
          name="qty"
          onChange={onChangeHandler}
        />
      </div>
      <Button
        onClick={() => {
          deleteCartItem(items.id);
        }}
      >
        <DeleteIcon />
      </Button>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteCartItem: function (id) {
      dispatch(removeFromCart(id));
    },
    updateItemQty: function (id, value) {
      dispatch(updateQty(id, value));
    },
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

import React, { useState, useEffect } from "react";
import CartItem from "./carts/CartItem";
import { connect } from "react-redux";

function MainCart({ cartArray }) {
  const [totalBill, setTotalBill] = useState(0);
  useEffect(() => {
    const totalPrice = cartArray.reduce((total, currentItem) => {
      return (total += currentItem.price * currentItem.qty);
    }, 0);
    setTotalBill(totalPrice);
  }, [cartArray, totalBill, setTotalBill]);
  return (
    <div className="container">
      <div className="row">
        {cartArray.map((item) => {
          return <CartItem key={item.id} items={item} />;
        })}
      </div>
      <div className="row">
        <label>Total:</label>
        <p>{totalBill}</p>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cartArray: state.page.cart,
  };
};
export default connect(mapStateToProps, null)(MainCart);

import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { connect } from "react-redux";
import { addToCart } from "../pageActions";

function Items({ items, addToCart }) {
  console.log(addToCart);
  return (
    <div className="card">
      <img className="item-image" src={items.image} />
      <h4>{items.title}</h4>
      <p className="details">{items.details}</p>
      <p className="price">Rs. {items.price}</p>
      <Link to={"#"}>
        <Button className="btn" variant="contained">
          ReadMore...
        </Button>
        <AddShoppingCartIcon onClick={() => addToCart(items.id)} />
      </Link>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: function (id) {
      dispatch(addToCart(id));
    },
  };
};
export default connect(null, mapDispatchToProps)(Items);

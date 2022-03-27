import React, { useState } from "react";
import logo from "../../assets/logo1.jpeg";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { NavItems } from "./navItems.js";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { connect } from "react-redux";

function Navbar({ cartItems }) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const countOnlyQtyField = (total, currentItem) => total + currentItem.qty;
  const cartLength = cartItems.reduce(countOnlyQtyField, 0);
  return (
    <nav className="navbar">
      <label className="logo">
        <img src={logo} />
        {/* Brand Name */}
      </label>
      <a href="#" className="toggle-button" onClick={handleClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={`${active ? "active" : null} navbar-links`}>
        <ul>
          {NavItems.map((item) => {
            return (
              <li>
                <Link to={item.url} className={item.cls}>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to={"/cart"} className="navitems">
              <AddShoppingCartIcon />
              {cartLength}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
const mapStateToProps = (state) => {
  return {
    cartItems: state.page.cart,
  };
};

export default connect(mapStateToProps, null)(Navbar);

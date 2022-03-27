import React from "react";
import { connect } from "react-redux";
import pageReducer from "./pageReducer";
import Items from "./products/Items";
import "../../styles/Items.css";

function MenuItems({ items }) {
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => {
          return <Items key={item.id} items={item} />;
        })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    items: state.page.items,
  };
};
export default connect(mapStateToProps, null)(MenuItems);

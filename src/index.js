import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./redux/createStore";
import MenuItems from "./components/pages/MenuItems";
import MainCart from "./components/cart/MainCart";
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Provider store={appStore}>
            <Navbar />
            <Routes>
              <Route path="/home" element={<MenuItems />} />
              <Route path="/menu" element={<MenuItems />} />
              <Route path="/" element={<MenuItems />} />
              <Route path="/cart" element={<MainCart />} />
            </Routes>
          </Provider>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ProductListingPage from "./components/ProductListingPage/ProductListingPage";
import OrderListingPage from "./components/OrderListingPage/OrderListingPage";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Dronuts</h1>
          <ul className="header">
            <li><NavLink to="/">Shop</NavLink></li>
            <li><NavLink to="/orders">Orders</NavLink></li>
            <li><NavLink to="/manage">Manager View</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={ProductListingPage}/>
            <Route path="/orders" component={OrderListingPage}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
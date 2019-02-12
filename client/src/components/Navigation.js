import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProductListingPage from "./ProductListingPage/ProductListingPage";
import OrderListingPage from "./OrderListingPage/OrderListingPage";

import Home from "./Home";

class Navigation extends Component {
  render() {
    return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/home'} className="nav-link"> Home </Link></li>
            <li><Link to={'/orders'} className="nav-link">Orders</Link></li>
            <li><Link to={'/'} className="nav-link">Shop</Link></li>
          </ul>
          </nav>
          
          <Switch>
            <Route exact path="/" component={ProductListingPage}/>
            <Route path="/orders" component={OrderListingPage}/>
            <Route path="/home" component={Home}/>


          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navigation;
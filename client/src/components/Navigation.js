import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProductListingPage from "./ProductListingPage/ProductListingPage";
import OrderListingPage from "./OrderListingPage/OrderListingPage";
import logo from '../img/dronut.png'

import Home from "./Home";

class Navigation extends Component {
  render() {
    return (
    <Router>



        <div>
        <center> <img src={logo} alt="Donut" height="80" width="200"/> </center>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/home'} className="navbarx"> Home </Link></li>
            <li><Link to={'/orders'} className="navbarx">Orders</Link></li>
            <li><Link to={'/shop'} className="navbarx">Shop</Link></li>
          </ul>

          <Link to={'/shop'} className="navbarx">Cart</Link>
          </nav>
          
          <Switch>
            <Route exact path="/shop" component={ProductListingPage}/>
            <Route path="/orders" component={OrderListingPage}/>
            <Route path="/home" component={Home}/>


          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navigation;
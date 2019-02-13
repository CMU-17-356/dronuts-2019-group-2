import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import ProductListingPage from "./ProductListingPage/ProductListingPage";
import OrderListingPage from "./OrderListingPage/OrderListingPage";
import logo from '../img/dronut.png'

import Home from "./Home";

class Navigation extends Component {
    onCartClick() {
    alert("Cart not yet implemented!")
  }
  render() {
    return (
    <Router>



        <div>
        

        <center> <Link to={'/home'}> <img src={logo} alt="Donut" height="80" width="200"/> </Link> </center>  <br />

          <nav className="navbar navbar-expand-lg ">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/home'} className="nav-link navbarx"> Home </Link></li>
            <li><Link to={'/orders'} className="nav-link navbarx">Orders</Link></li>
            <li><Link to={'/shop'} className="nav-link navbarx">Shop</Link></li>
          </ul>
          
          <div onClick={this.onCartClick} className="nav-link navbarxr" > Cart</div>
          
          </nav>
          
          <Switch>
            <Route exact path="/shop" component={ProductListingPage}/>
            <Route path="/orders" component={OrderListingPage}/>
            <Route path="/home" component={Home}/>
            <Redirect from="/" to="Home" />


          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navigation;
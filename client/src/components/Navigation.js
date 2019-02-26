import React, { Component } from 'react';

import ReactDOM from "react-dom";
import axios from "axios";
import Header from "./Shop/components/Header";
import Products from "./Shop/components/Products";
import Footer from "./Shop/components/Footer";
import QuickView from "./Shop/components/QuickView";
import "./Shop/scss/style.scss";

import CartScrollBar from "./Shop/components/CartScrollBar";
import Counter from "./Shop/components/Counter";
import EmptyCart from "./Shop/empty-states/EmptyCart";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { findDOMNode } from "react-dom";

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import ShopPage from "./Shop/ShopPage";
import OrderListingPage from "./OrderListingPage/OrderListingPage";
import logo from '../img/dronut.png'
import Home from "./Home";
import Checkout from "./Shop/components/Checkout";

class Navigation extends Component {
    
  
  render() {


    return (
    <Router>

        <div>
        <center> <Link to={'/home'}> <img src={logo} alt="Donut" className="logo" height="80" /> </Link> </center>  

          <nav className="navbar navbar-expand-lg ">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/home'} className="nav-link navbarx"> Home </Link></li>
            <li><Link to={'/orders'} className="nav-link navbarx">Orders</Link></li>
            <li><Link to={'/shop'} className="nav-link navbarx">Shop</Link></li>
          </ul>
        
          
          </nav>
          
          <Switch>
            <Route exact path="/shop" component={ShopPage}/>
            <Route path="/orders" component={OrderListingPage}/>
            <Route path="/home" component={Home}/>
            <Route path="/checkout" component={Checkout}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navigation;
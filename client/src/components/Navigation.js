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
import DonutNew from "./Inventory/DonutNew";
import DonutEdit from "./Inventory/DonutEdit";
import DonutShow from "./Inventory/DonutShow";
import DonutList from "./Inventory/DonutList";
import logo from '../img/dronut.png'
import Home from "./Home";
import Checkout from "./Shop/components/Checkout";
import Login from "./Login";
import Cookies from 'universal-cookie';


class Navigation extends Component {

    constructor(props) {
    super(props);
    this.state = { loginOpen: false };
  }

  toggleLogin = () => {
    this.setState({
      loginOpen: !this.state.loginOpen
    });
  }

  logout() {
    const cookies = new Cookies();
    cookies.set("admin", false, {path: "/"});
    window.location.reload();
    window.alert("You were successfully logged out.")

  }

  render() {

    const cookies = new Cookies();

    return (
    <Router>

        <div>

        <center> <Link to={'/home'}> <img src={logo} alt="Donut" className="logo" height="80" /> </Link> </center>

          <nav className="navbar navbar-expand-lg ">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/home'} className="nav-link navbarx"> Home </Link></li>
            {(cookies.get('admin') == 'true') ? <li><Link to={'/orders'} className="nav-link navbarx">Orders</Link></li> : "" }
            <li><Link to={'/shop'} className="nav-link navbarx">Shop</Link></li>

            {(cookies.get('admin') == 'true') ? <li><Link to={'/inventory'} className="nav-link navbarx">Inventory</Link></li> : "" }

            {(cookies.get('admin') == 'true') ? <li><Link to={'/add'} className="nav-link navbarx">Add Donut</Link></li> : "" }

            {(cookies.get('admin') == 'true') ?
            <li className="login-button nav-link navbarx" onClick={this.logout}>Logout</li> :
            <li className="login-button nav-link navbarx" onClick={this.toggleLogin}>Login</li> }
          </ul>

          </nav>

        <Login
          show={this.state.loginOpen}
          onClose={this.toggleLogin}>
        </Login>

          <Switch>
            <Route exact path="/shop" component={ShopPage}/>
            <Route path="/orders" component={OrderListingPage}/>
            <Route path="/home" component={Home}/>
            <Route path="/inventory" component={DonutList}/>
            <Route path="/add" component={DonutNew}/>
            <Route path="/edit/:id" component={DonutEdit}/>
            <Route path="/show/:id" component={DonutShow}/>
            <Route path="/checkout" component={Checkout}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navigation;

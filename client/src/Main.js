import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ProductListingPage from "./components/ProductListingPage/ProductListingPage";
import OrderListingPage from "./components/OrderListingPage/OrderListingPage";
import Navigation from './components/Navigation';


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>

              <center> <h1>Dronuts</h1> </center>
        
        <Navigation />

        </div>
      </HashRouter>
    );
  }
}

export default Main;
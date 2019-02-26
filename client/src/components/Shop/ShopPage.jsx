import React, { Component } from 'react';

import ReactDOM from "react-dom";
import axios from "axios";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import QuickView from "./components/QuickView";
import "./scss/style.scss";


import glazed from '../../img/glazed.jpg'
import chocofrosted from '../../img/chocofrosted.jpg'
import bostoncream from '../../img/bostoncream.jpg'
import { Container, Row, Col } from 'react-bootstrap';


class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      products: [
                  {
                    "id": 1,
                    "name": "Original Glazed",
                    "price": 2,
                    "image": "/img/glazed.jpg",
                  },
                  {
                    "id": 2,
                    "name": "Chocolate Frosted",
                    "price": 3.00,
                    "image": "/img/chocofrosted.jpg",
                  },
                  {
                    "id": 3,
                    "name": "Boston Cream",
                    "price": 4.00,
                    "image": "/img/bostoncream.jpg",
                  },
                  {
                    "id": 4,
                    "name": "Signiture Sprinkles",
                    "price": 3.00,
                    "image": "/img/sprinkles.png",
                  }

                ],
      cart: JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [],
      totalItems: 0,
      totalAmount: 0,
      term: "",
      cartBounce: false,
      quantity: 1,
      quickViewProduct: {},
      modalActive: false,
    };
    console.log(this.state.cart);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }
  componentWillMount() {
    this.sumTotalAmount(this.state.cart);
    this.sumTotalItems(this.state.cart);
    
  }
  componentWillReceiveProps() {
    this.setState({
      cart: JSON.parse(localStorage.getItem("cart"))
    });
  }
  // Add to Cart
  handleAddToCart(selectedProducts) {
    let cartItem = this.state.cart;
    let productID = selectedProducts.id;
    let productQty = selectedProducts.quantity;
    if (this.checkProduct(productID)) {
      console.log("hi");
      let index = cartItem.findIndex(x => x.id == productID);
      cartItem[index].quantity =
        Number(cartItem[index].quantity) + Number(productQty);
      this.setState({
        cart: cartItem
      });
      localStorage.setItem("cart", JSON.stringify(cartItem));
    } else {
      cartItem.push(selectedProducts);
    }
    this.setState({
      cart: cartItem,
      cartBounce: true,
    });
    localStorage.setItem("cart", JSON.stringify(cartItem));
    setTimeout(
      function() {
        this.setState({
          cartBounce: false,
          quantity: 1
        });
        console.log(this.state.quantity);
        console.log(this.state.cart);
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  }
  handleRemoveProduct(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.id == id);
    cart.splice(index, 1);
    this.setState({
      cart: cart
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    e.preventDefault();
  }
  checkProduct(productID) {
    let cart = this.state.cart;
    return cart.some(function(item) {
      return item.id === productID;
    });
  }
  sumTotalItems() {
    let total = 0;
    let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total += parseInt(cart[i].quantity);
    }    this.setState({
      totalItems: total
    });
  }
  sumTotalAmount() {
    let total = 0;
    let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount: total
    });
  }

  //Reset Quantity
  updateQuantity(qty) {
    console.log("quantity added...");
    this.setState({
      quantity: qty
    });
  }
  // Open Modal
  openModal(product) {
    this.setState({
      quickViewProduct: product,
      modalActive: true
    });
  }
  // Close Modal
  closeModal() {
    this.setState({
      modalActive: false
    });
  }
  
  render() {
    return (
      <div className="container">
      <Header
          cartBounce={this.state.cartBounce}
          total={this.state.totalAmount}
          totalItems={this.state.totalItems}
          cartItems={this.state.cart}
          removeProduct={this.handleRemoveProduct}
          updateQuantity={this.updateQuantity}
          productQuantity={this.state.moq}
        />
      <Products
          productsList={this.state.products}
          addToCart={this.handleAddToCart}
          productQuantity={this.state.quantity}
          updateQuantity={this.updateQuantity}
          openModal={this.openModal}
        />
        </div>
        

    )
  }
}

export default ShopPage;
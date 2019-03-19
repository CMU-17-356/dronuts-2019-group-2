import React, { Component } from 'react';
import Order from './Order.jsx';

import { Container, Row, Col, Tabs, Tab  } from 'react-bootstrap';

class OrderListingPage extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/orders/')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({orders: data});
      console.log("state", this.state.orders);
    })
  }

  render() {
    const { orders } = this.state

    if (orders.length === 0) {
      return (
        <div className="emptyOrders">
          <h3>Currently no orders</h3>
        </div>
      )
    }

    const items = orders.map(function(order){
      return (
        <Row>
          <Order
            id={order._id}
            items={order.items}
            paid={order.paid}
            status={order.status}
          />
        </Row>
      );
    });

    return (
      <Container class = "plscroll">
        <br />
        {items}
      </Container>
    )
  }
}

export default OrderListingPage;

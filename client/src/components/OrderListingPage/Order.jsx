import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Order extends Component {
  onOrderClick() {
    alert("Order sent!")
  }
  
  render() {
    const { id, drone, donuts, address } = this.props;
    const order = donuts.map((donut, key) =>
      <li key={donut.id}>
        {donut.name}: {donut.quantity}
      </li>
    )
    
    return (
      // <li id={id}>
        <span>
          <div className="drone">
            <h3>Drone {drone}</h3>
          </div>          
          <div className="order">      
            <h5>Deliver to: {address}</h5>
            <ul>
              {order}
            </ul>
          </div>
          <Button variant="outline-primary" onClick={this.onOrderClick}>
              Complete order

          </Button>
          <br />
          <br />

        </span>
      // </li>
    );
  }
}

export default Order;
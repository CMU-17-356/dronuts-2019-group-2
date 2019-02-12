import React, { Component } from 'react';
import Order from './Order.jsx';


class OrderListingPage extends Component {
  render() {
    return (
      <div className="olp">
        <ul>
          <Order
            id="1"
            drone="2"
            donuts={[{id: 2, name:'Chocolate Frosted', quantity: 2},
                    {id: 3, name:'Boston Cream', quantity: 1}]}
            address="123 Main Street"
          />
          <Order
            id="2"
            drone="3"
            donuts={[{id: 1, name:'Glazed', quantity: 3}]}
            address="5000 Forbes Avenue"
          />
          <Order
            id="3"
            drone="1"
            donuts={[{id: 2, name:'Chocolate Frosted', quantity: 1}]}
            address="404 Wilkins Avenue"
          />
        </ul>
      </div>
    )
  }
}

export default OrderListingPage;
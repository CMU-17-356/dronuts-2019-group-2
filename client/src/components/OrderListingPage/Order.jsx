import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Order extends Component {
  constructor () {
    super();
    this.onOrderClick = this.onOrderClick.bind(this);
  }

  onOrderClick() {
    this.setState({ isHidden: !this.state.isHidden });
  }

  render() {
    const { id, items, paid, status, address } = this.props;
    // const order = items.map((donut, key) =>
    //   <li key={donut}>
    //     {donut}
    //   </li>
    // )

    return (
      <span>
        <div className="drone">
          <h3>Drone</h3>
        </div>
        <div className="order">
          <h5>Deliver to: {address}</h5>
          <ul>
            {items}
          </ul>
        </div>
        {status == "packing" &&
          <Button variant="outline-primary" onClick={this.onOrderClick}>
            Complete order
          </Button>
        }

        <br />
        <br />
      </span>
    );
  }
}

export default Order;

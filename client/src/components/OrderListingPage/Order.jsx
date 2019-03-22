import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Order extends Component {
  constructor () {
    super();
    this.onOrderClick = this.onOrderClick.bind(this);
    this.state = {isHidden: false};
  }

  onOrderClick() {
    this.setState({ isHidden: !this.state.isHidden });
  }

  render() {
    const { id, items, paid, status, lat, long } = this.props;
    // const order = items.map((donut, key) =>
    //   <li key={donut}>
    //     {donut}
    //   </li>
    // )
    if (this.state.isHidden){
      return(<span></span>);
    }

    return (
      
      <span>
        <div className="drone">
          <h3>Drone</h3>
          <h5>Status: {status}</h5>
        </div>
        <div className="order">
          <h5>Deliver to: {"("+lat+", "+long+")"}</h5>
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

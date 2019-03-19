import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Order extends Component {
  constructor () {
    super();
    this.state = {
      isHidden: false,
    };

    this.onOrderClick = this.onOrderClick.bind(this);


  }

  onOrderClick() {
    this.setState({ isHidden: !this.state.isHidden });
  }



  render() {
    const { id, items, paid, status } = this.props;
    const order = items.map((donut, key) =>
      <li key={donut.id}>
        {donut.name}: {donut.quantity}
      </li>
    )

    if (this.state.isHidden) {
      return (<div> </div>);

    }
    else {

      if (status == "packing") {
    return (
      // <li id={id}>


        <span>

          <div className="drone">
            <h3>Drone 1</h3>
          </div>
          <div className="order">
            <h5>Deliver to: 5000 Forbes Ave</h5>
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
      else {

          return (
      // <li id={id}>


        <span>

          <div className="drone">
            <h3>Drone 1</h3>
          </div>
          <div className="order">
            <h5>Deliver to: 5000 Forbes Ave</h5>
            <ul>
              {order}
            </ul>
          </div>


               <br />
          <br />
        </span>
      // </li>
    );
      }
    }

  }
}

export default Order;

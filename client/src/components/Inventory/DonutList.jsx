import React, { Component } from 'react';
import Donut from './Donut.jsx';

import chocofrosted from '../../img/chocofrosted.jpg'
import bostoncream from '../../img/bostoncream.jpg'
import { Container, Row, Col } from 'react-bootstrap';

class DonutList extends Component {
  constructor() {
    super();
    this.state = {
      donuts: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/donuts/')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({donuts: data});
      console.log("state", this.state.donuts);
    })
  }

  render() {
    const { donuts } = this.state

    if (donuts.length === 0) {
      return (
        <div className="emptyInventory">
          <h3>Sorry! We currently are all out of inventory. Please check back again later</h3>
        </div>
      )
    }

    const items = donuts.map(function(donut){
      return (
        <Col>
          <Donut
            id={donut._id}
            flavor={donut.flavor}
            price={donut.price}
            numAvailable={donut.numAvailable}
            description={donut.description}
            image={donut.image}
          />
        </Col>
      );
    });

    return (
      <Container class = "plscroll">
        <br />
        <Row>
          {items}
        </Row>
      </Container>
    )
  }
}

export default DonutList;

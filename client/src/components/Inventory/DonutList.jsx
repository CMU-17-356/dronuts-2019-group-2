import React, { Component } from 'react';
import Donut from './Donut.jsx';

import glazed from '../../img/glazed.jpg'
import chocofrosted from '../../img/chocofrosted.jpg'
import bostoncream from '../../img/bostoncream.jpg'
import { Container, Row, Col } from 'react-bootstrap';

class DonutList extends Component {
  render() {
    return (
      <Container class = "plscroll">
        <Row>
          <Col>
              <Donut
                flavor="Glazed"
                price="2"
                numAvailable="10"
                description="Classic glazed donut."
                image={glazed}
              />
          </Col>
          <Col>
              <Donut
                flavor="Chocolate-frosted"
                price="3"
                numAvailable="10"
                description="Frosted over with a rich, smooth chocolate ganache."
                image={chocofrosted}
              />
          </Col>
          <Col>
              <Donut
                flavor="Boston Cream"
                price="3"
                numAvailable="10"
                description="Boston cream pie in donut form."
                image={bostoncream}
              />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default DonutList;

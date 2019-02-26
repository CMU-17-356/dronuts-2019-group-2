import React, { Component } from 'react';
import Donut from './Donut.jsx';

import glazed from '../../img/glazed.jpg'
import chocofrosted from '../../img/chocofrosted.jpg'
import bostoncream from '../../img/bostoncream.jpg'
import { Container, Row, Col } from 'react-bootstrap';


class ProductListingPage extends Component {
  
  
  render() {
    return (
        <Container class = "plscroll">
        <Row>
          <Col>
              <Donut
                id="1"
                name="Glazed"
                info="Classic glazed donut."
                img={glazed}
                price= "2.50"
              />
          </Col>
          <Col>

              <Donut
                id="2"
                name="Chocolate-frosted"
                info="Frosted over with a rich, smooth chocolate ganache."
                img={chocofrosted}
                price="3.00"
              />
          </Col>
          <Col>
              <Donut
                id="3"
                name="Boston Cream"
                info="Boston cream pie in donut form."
                img={bostoncream}
                price="4.00"
              />
          </Col>
        </Row> 
                
        </Container>

    )
  }
}

export default ProductListingPage;
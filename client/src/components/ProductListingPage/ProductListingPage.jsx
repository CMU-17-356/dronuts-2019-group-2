import React, { Component } from 'react';
import Donut from './Donut.jsx';

import glazed from '../../img/glazed.jpg'
import chocofrosted from '../../img/chocofrosted.jpg'
import bostoncream from '../../img/bostoncream.jpg'
import { Container, Row, Col } from 'react-bootstrap';


class ProductListingPage extends Component {
  
  
  render() {
    return (
        <Container>
        <Row>
          <Col>
              <Donut
                id="1"
                name="Glazed"
                info="Classic glazed donut."
                img={glazed}
              />
          </Col>
          <Col>

              <Donut
                id="2"
                name="Chocolate-frosted"
                info="Frosted over with a rich, smooth chocolate ganache."
                img={chocofrosted}
              />
          </Col>
          <Col>
              <Donut
                id="3"
                name="Boston Cream"
                info="Boston cream pie in donut form."
                img={bostoncream}
              />
          </Col>
        </Row> 
                <Row>
          <Col>
              <Donut
                id="1"
                name="Glazed"
                info="Classic glazed donut."
                img={glazed}
              />
          </Col>
          <Col>

              <Donut
                id="2"
                name="Chocolate-frosted"
                info="Frosted over with a rich, smooth chocolate ganache."
                img={chocofrosted}
              />
          </Col>
          <Col>
              <Donut
                id="3"
                name="Boston Cream"
                info="Boston cream pie in donut form."
                img={bostoncream}
              />
          </Col>
        </Row> 
                <Row>
          <Col>
              <Donut
                id="1"
                name="Glazed"
                info="Classic glazed donut."
                img={glazed}
              />
          </Col>
          <Col>

              <Donut
                id="2"
                name="Chocolate-frosted"
                info="Frosted over with a rich, smooth chocolate ganache."
                img={chocofrosted}
              />
          </Col>
          <Col>
              <Donut
                id="3"
                name="Boston Cream"
                info="Boston cream pie in donut form."
                img={bostoncream}
              />
          </Col>
        </Row> 
        </Container>
    )
  }
}

export default ProductListingPage;
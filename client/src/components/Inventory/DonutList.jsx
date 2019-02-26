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
                name="Glazed"
                info="Classic glazed donut."
                img={glazed}
              />
          </Col>
          <Col>
              <Donut
                name="Chocolate-frosted"
                info="Frosted over with a rich, smooth chocolate ganache."
                img={chocofrosted}
              />
          </Col>
          <Col>
              <Donut
                name="Boston Cream"
                info="Boston cream pie in donut form."
                img={bostoncream}
              />
          </Col>
        </Row>
        <Row>
          <Col>
              <Donut
                name="Glazed"
                info="Classic glazed donut."
                img={glazed}
              />
          </Col>
          <Col>

              <Donut
                name="Chocolate-frosted"
                info="Frosted over with a rich, smooth chocolate ganache."
                img={chocofrosted}
              />
          </Col>
          <Col>
              <Donut
                name="Boston Cream"
                info="Boston cream pie in donut form."
                img={bostoncream}
              />
          </Col>
        </Row>
        <Row>
          <Col>
              <Donut
                name="Glazed"
                info="Classic glazed donut."
                img={glazed}
              />
          </Col>
          <Col>

              <Donut
                name="Chocolate-frosted"
                info="Frosted over with a rich, smooth chocolate ganache."
                img={chocofrosted}
              />
          </Col>
          <Col>
              <Donut
                name="Boston Cream"
                info="Boston cream pie in donut form."
                img={bostoncream}
              />
          </Col>
        </Row>
        <Row>
          <Col>
              <Donut
                name="Glazed"
                info="Classic glazed donut."
                img={glazed}
              />
          </Col>
          <Col>

              <Donut
                name="Chocolate-frosted"
                info="Frosted over with a rich, smooth chocolate ganache."
                img={chocofrosted}
              />
          </Col>
          <Col>
              <Donut
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

export default DonutList;

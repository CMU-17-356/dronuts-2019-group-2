import React, { Component } from 'react';
import Order from './Order.jsx';

import { Container, Row, Col, Tabs, Tab  } from 'react-bootstrap';

class OrderListingPage extends Component {
  render() {
    return (
      <div className="olp">

      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Drone 1">
  <Container>
  <Row>
     <Col md={{ padding: 20}}>          
      <Order
          id="1"
          drone="1"
          donuts={[{id: 2, name:'Chocolate Frosted', quantity: 2},
                  {id: 3, name:'Boston Cream', quantity: 1}]}
          address="123 Main Street"
      />
    </Col>

     <Col md={{ padding: 20}}>      
        <Order
            id="2"
            drone="1"
            donuts={[{id: 1, name:'Glazed', quantity: 3}, {id: 3, name:'Boston Cream', quantity: 1}]}
            address="5000 Forbes Avenue"
          />
    </Col>
     <Col md={{ padding: 20}}>
          <Order
            id="3"
            drone="1"
            donuts={[{id: 2, name:'Chocolate Frosted', quantity: 1},{id: 1, name:'Glazed', quantity: 2},]}
            address="404 Wilkins Avenue"
          />
    </Col>
  </Row>
  <Row>
   <Col md={{ padding: 20}}>
            <Order
            id="3"
            drone="1"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},]}
            address="400 Wilkins Avenue"
          />
  </Col>
  
   <Col md={{ padding: 20}}>

            <Order
            id="3"
            drone="1"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},]}
            address="400 Wilkins Avenue"
          />
  </Col>
         <Col md={{ padding: 20}}>
          <Order
            id="3"
            drone="1"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},]}
            address="400 Wilkins Avenue"
          />
    </Col>
  </Row>
</Container>
  </Tab>
  <Tab eventKey="profile" title="Drone 2">
  <Container>
  <Row>
     <Col md={{ padding: 20}}>          
      <Order
          id="1"
          drone="2"
          donuts={[{id: 2, name:'Chocolate Frosted', quantity: 2},
                  {id: 3, name:'Boston Cream', quantity: 1}]}
          address="123 Main Street"
      />
    </Col>

     <Col md={{ padding: 20}}>      
        <Order
            id="2"
            drone="2"
            donuts={[{id: 1, name:'Glazed', quantity: 3}, {id: 3, name:'Boston Cream', quantity: 1}]}
            address="5000 Forbes Avenue"
          />
    </Col>
     <Col md={{ padding: 20}}>
          <Order
            id="3"
            drone="2"
            donuts={[{id: 2, name:'Chocolate Frosted', quantity: 1},{id: 1, name:'Glazed', quantity: 2},]}
            address="404 Wilkins Avenue"
          />
    </Col>
  </Row>
  <Row>
   <Col md={{ padding: 20}}>
            <Order
            id="3"
            drone="2"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},]}
            address="400 Wilkins Avenue"
          />
  </Col>
  
   <Col md={{ padding: 20}}>

            <Order
            id="3"
            drone="2"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},]}
            address="400 Wilkins Avenue"
          />
  </Col>
         <Col md={{ padding: 20}}>
          <Order
            id="3"
            drone="2"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},]}
            address="400 Wilkins Avenue"
          />
    </Col>
  </Row>
</Container>
  </Tab>
  <Tab eventKey="contact" title="Drone 3">
  <Container>
  <Row>
     <Col md={{ padding: 20}}>          
      <Order
          id="1"
          drone="3"
          donuts={[{id: 2, name:'Chocolate Frosted', quantity: 2},
                  {id: 3, name:'Boston Cream', quantity: 1}]}
          address="123 Main Street"
      />
    </Col>

     <Col md={{ padding: 20}}>      
        <Order
            id="2"
            drone="3"
            donuts={[{id: 1, name:'Glazed', quantity: 3}, {id: 3, name:'Boston Cream', quantity: 1}]}
            address="5000 Forbes Avenue"
          />
    </Col>
     <Col md={{ padding: 20}}>
          <Order
            id="3"
            drone="3"
            donuts={[{id: 2, name:'Chocolate Frosted', quantity: 1},{id: 1, name:'Glazed', quantity: 2},]}
            address="404 Wilkins Avenue"
          />
    </Col>
  </Row>
  <Row>
   <Col md={{ padding: 20}}>
            <Order
            id="3"
            drone="3"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},]}
            address="400 Wilkins Avenue"
          />
  </Col>
  
   <Col md={{ padding: 20}}>

            <Order
            id="3"
            drone="3"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},]}
            address="400 Wilkins Avenue"
          />
  </Col>
         <Col md={{ padding: 20}}>
          <Order
            id="3"
            drone="3"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},]}
            address="400 Wilkins Avenue"
          />
    </Col>
  </Row>
</Container>
  </Tab>

</Tabs>



      </div>
    )
  }
}

export default OrderListingPage;
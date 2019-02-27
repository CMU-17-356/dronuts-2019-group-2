import React, { Component } from 'react';
import Order from './Order.jsx';

import { Container, Row, Col, Tabs, Tab  } from 'react-bootstrap';

class OrderListingPage extends Component {

  render() {
    return (
      <div className="olp">

      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Not Packaged">
  <Container>
  <Order
            id="1"
            drone="1"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},]}
            address="400 Wilkins Avenue"
            status = "packing"
          />
    <Order
            id="2"
            drone="2"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},{id: 3, name:'Boston Creme', quantity: 1}]}
            address="400 Forbes Avenue"
            status = "packing"
          />
     <Order
            id="1"
            drone="3"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},]}
            address="400 Wilkins Avenue"
            status = "packing"

          />
    <Order
            id="2"
            drone="1"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},{id: 3, name:'Boston Creme', quantity: 1}]}
            address="400 Forbes Avenue"
            status = "packing"

          />

     <Order
            id="1"
            drone="2"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},]}
            address="400 Wilkins Avenue"
            status = "packing"

          />
    <Order
            id="2"
            drone="3"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},{id: 3, name:'Boston Creme', quantity: 1}]}
            address="400 Forbes Avenue"
            status = "packing"

          />
  </Container> 

  </Tab>
  <Tab eventKey="profile" title="Sent Out">
      <Container> 
       <Order
            id="1"
            drone="1"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},]}
            address="400 Wilkins Avenue"
            status = "sending"
          />
    <Order
            id="2"
            drone="2"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},{id: 3, name:'Boston Creme', quantity: 1}]}
            address="400 Forbes Avenue"
            status = "sending"

          />
     <Order
            id="1"
            drone="3"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},]}
            address="400 Wilkins Avenue"
            status = "sending"

          />
    <Order
            id="2"
            drone="1"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},{id: 3, name:'Boston Creme', quantity: 1}]}
            address="400 Forbes Avenue"
            status = "sending"

          />

    </Container>
  </Tab>
  <Tab eventKey="contact" title="Completed">
      <Container> 
       <Order
            id="1"
            drone="1"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},]}
            address="400 Wilkins Avenue"
            status = "sending"
          />
    <Order
            id="2"
            drone="2"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},{id: 3, name:'Boston Creme', quantity: 1}]}
            address="400 Forbes Avenue"
            status = "sending"

          />
     <Order
            id="1"
            drone="3"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},]}
            address="400 Wilkins Avenue"
            status = "sending"

          />
    <Order
            id="2"
            drone="1"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},{id: 3, name:'Boston Creme', quantity: 1}]}
            address="400 Forbes Avenue"
            status = "sending"

          />
    </Container>
      </Tab>

    </Tabs>



      </div>
    )
  }
}

export default OrderListingPage;
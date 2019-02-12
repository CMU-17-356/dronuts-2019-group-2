import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import {Jumbotron, Button} from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Jumbotron>
        <center> <h1>Welcome to Dronuts</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Click here to Shop</Button>
        </p>
         </center>
      </Jumbotron>
    );
  }
}

export default Home;
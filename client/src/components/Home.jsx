import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Jumbotron, Button} from 'react-bootstrap';


class Home extends Component {
  render() {


    return (
        <div className="router-container2">
          <div className="main-hero">
            <div className="hero-text">
            <center> <h1>Welcome to Dronut</h1>
            <p>
              We are a startup company that delivers donuts to you with drones!!! 
            </p>
            <p>
            We are updating constantly, check back for improvements! 
            </p>
            <p>
             <Link to={'/shop'}> <Button variant="outline-primary">
Shop Now</Button></Link>
            </p>
             </center>

          </div>
          </div>
          </div>

    );
  }
}

export default Home;
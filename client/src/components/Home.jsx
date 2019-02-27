import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Jumbotron, Button} from 'react-bootstrap';


class Home extends Component {
  render() {


    return (

          <div className="main-hero">
            <div className="hero-text">
            <center> <h1>Welcome to Dronuts</h1>
            <p>
              We are a startup company that delivers donuts to you with drones!!! 
            </p>
            <p>
            Check back for a more completed website with an actual home page. 
            </p>
            <p>
             <Link to={'/shop'}> <Button variant="outline-primary">
Shop Now</Button></Link>
            </p>
             </center>

          </div>
          </div>

    );
  }
}

export default Home;
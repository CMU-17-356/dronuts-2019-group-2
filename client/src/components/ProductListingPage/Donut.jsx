import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Donut extends Component {
  onDonutClick() {
    alert("Added to cart!")
  }
  
  render() {
    const { id, name, info, img } = this.props;
    
    return (
        <span>
          <div className="donut-img">
            <img src={img} alt="Donut" height="80" width="80"/>
            <h3 className="donut-name">{name}</h3>                                   
          </div>          
          <div className="donut-info">            
            <p>{info}</p>
          </div>

        <Button variant="outline-primary" onClick={this.onOrderClick}> Add to Cart </Button>
        <br />
        <br />

        </span>
    );
  }
}

export default Donut;
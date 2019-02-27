import React, { Component } from 'react';
import './donut-show.css';

class DonutShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flavor: '',
      price: 0,
      numAvailable: 0,
      image: '', // uri resource
      description: ''
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params
    fetch('http://0.0.0.0:8080/api/donuts/' + id)
    .then(result => {
      return result.json();
    }).then(donut => {
      this.setState({flavor: donut.flavor});
      this.setState({price: donut.price});
      this.setState({numAvailable: donut.numAvailable});
      this.setState({image: donut.image});
      this.setState({description: donut.description});
    })
  }

  render() {
    return (
      <center>
        <div className="donut">
          <img src={this.state.image} alt="Donut" height="80" width="80"/>
          <h3 className="donut-flavor">Flavor Name: {this.state.flavor}</h3>
          <h4 className="donut-price">Price: ${this.state.price}</h4>
          <h4 className="donut-numAvailable">Available in Inventory: {this.state.numAvailable}</h4>
          <p>Description: {this.state.description}</p>
        </div>
      </center>
    );
  }
}

export default DonutShow;

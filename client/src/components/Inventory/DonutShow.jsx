import React, { Component } from 'react';

class DonutShow extends Component {
  constructor() {
    super();
    this.state = {
      flavor: "",
      price: "",
      numAvailable: "",
      picture: "",
      description: ""
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/donuts/' + this.props.id)
    .then(donut => {
      return donut.json();
    }).then(data => {
      this.setState({flavor: data.donut.flavor});
      this.setState({price: data.donut.price});
      this.setState({numAvailable: data.donut.numAvailable});
      this.setState({picture: data.donut.picture});
      this.setState({description: data.donut.description});
    })
  }

  render() {
    // const { id, flavor, info, img } = this.props;

    return (
        <span>
          <div className="donut">
            <img src={this.state.picture} alt="Donut" height="80" width="80"/>
            <h3 className="donut-flavor">{this.state.flavor}</h3>
            <h4 className="donut-price">{this.state.price}</h4>
            <h4 className="donut-numAvailable">{this.state.numAvailable}</h4>
          </div>
          <div className="donut-description">
            <p>{this.state.description}</p>
          </div>

        </span>
    );
  }
}

export default DonutShow;

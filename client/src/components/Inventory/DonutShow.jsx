import React, { Component } from 'react';

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
    .then(donut => {
      this.setState({flavor: donut.flavor});
      this.setState({price: donut.price});
      this.setState({numAvailable: donut.numAvailable});
      this.setState({picture: donut.picture});
      this.setState({description: donut.description});
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

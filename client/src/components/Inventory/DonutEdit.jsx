import React, { Component } from 'react';
import DonutForm from './DonutForm'

class DonutEdit extends Component {
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
    const { flavor, price, numAvailable, image, description } = this.state;
    return (
      <DonutForm // for edit, pass in the donut's previous params as props
        flavor={flavor}
        price={price}
        numAvailable={numAvailable}
        image={image}
        description={description}
      />
    );
  }
}

export default DonutEdit;

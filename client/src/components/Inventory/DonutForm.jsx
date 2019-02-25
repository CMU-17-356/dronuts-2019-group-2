import React, { Component } from 'react';

class DonutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flavor: '',
      price: 0,
      numAvailable: 0,
      image: '', // uri resource
      description: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const { new } = this.props;

    return (
      <form>
        <label>
          Flavor:
          <input
            name="flavor"
            type="text"
            value={this.state.flavor}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Price:
          <input
            name="price"
            type="number"
            value={this.state.price}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Available in stock:
          <input
            name="numAvailable"
            type="number"
            value={this.state.numAvailable}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Image Link:
          <input
            name="image"
            type="url"
            value={this.state.image}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

export default DonutForm;

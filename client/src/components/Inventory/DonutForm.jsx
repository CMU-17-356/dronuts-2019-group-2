import React, { Component } from 'react';
import './donut-form.css';

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

  handleFileUpload(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Donut has been added!');
  }

  render() {
    return (
      <div className="donut-form">
        <form>
          <label className="left">
            Flavor:
          </label>
          <input
            className="right"
            name="flavor"
            type="text"
            value={this.state.flavor}
            onChange={this.handleInputChange} />
          <br />
          <label className="left">
            Price:
          </label>
          <input
            className="right"
            name="price"
            type="number"
            value={this.state.price}
            onChange={this.handleInputChange} />
          <br />
          <label className="left">
            Available in stock:
          </label>
          <input
            className="right"
            name="numAvailable"
            type="number"
            value={this.state.numAvailable}
            onChange={this.handleInputChange} />
          <br />
          <label className="left">
            Image Link:
          </label>
          <input
            className="right"
            name="image"
            type="file"
            value={this.state.image}
            onChange={this.handleFileUpload} />
          <br />
          <label className="left">
            Description:
          </label>
          <textarea
            className="right"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default DonutForm;

import React, { Component } from 'react';
import './donut-form.css';

class DonutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flavor: this.props.flavor,
      price: this.props.price,
      numAvailable: this.props.numAvailable,
      image: this.props.image, // uri resource
      description: this.props.description
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(JSON.stringify({
      "flavor": this.state.flavor,
      "price": this.state.price,
      "numAvailable": this.state.numAvailable,
      "image": this.state.image,
      "description": this.state.description
    }));

    fetch('http://0.0.0.0:8080/api/donuts/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "flavor": this.state.flavor,
        "price": this.state.price,
        "numAvailable": this.state.numAvailable,
        "image": this.state.image,
        "description": this.state.description
      })
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));

    alert("Donut added!");
  }

  render() {

    return (
      <div className="donut-form">
        <h2>Add a Donut</h2>
        <hr />
        <form onSubmit={this.handleSubmit}>
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
            Image Path:
          </label>
          <input
            className="right"
            name="image"
            type="text"
            value={this.state.image}
            onChange={this.handleInputChange} />
          <br />
          <label className="left">
            Description:
          </label>
          <textarea
            className="form-control"
            rows="3"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange} />
          <br />
          <input className="outline-primary" type="submit" value="Submit" />
          <br />
        </form>
      </div>
    );
  }
}

export default DonutForm;

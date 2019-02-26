import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Donut extends Component {
  onEditClick() {
    alert("Edit");
  }

  onDeleteClick() {
    alert("Deleted");
  }

  render() {
    const { name, info, img } = this.props;

    return (
        <span>
          <div className="donut-img">
            <img src={img} alt="Donut" height="80" width="80"/>
            <h3 className="donut-name">{name}</h3>
          </div>
          <div className="donut-info">
            <p>{info}</p>
          </div>

        <Button variant="outline-primary" onClick={this.onEditClick}>Edit</Button>
        <Button variant="outline-primary" onClick={this.onDeleteClick}>Delete</Button>

        <br />
        <br />

        </span>
    );
  }
}

export default Donut;

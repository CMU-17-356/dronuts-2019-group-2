import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Donut extends Component {
  state = {
    edit: false,
    delete: false,
    show: false
  }

  onEditClick() {
    this.setState(() => ({edit: true}))
  }

  onDeleteClick() {
    this.setState(() => ({delete: true}))
  }

  onShowClick() {
    this.setState(() => ({show: true}))
  }

  render() {
    const { id, name, info, img } = this.props;

    if (this.state.edit === true) {
      return <Redirect to='/edit' />
    }

    if (this.state.show === true) {
      return <Redirect to='/show' />
    }

    return (
        <span>
          <div className="donut-img">
            <img src={img} alt="Donut" height="80" width="80" onClick={this.onShowClick}/>
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

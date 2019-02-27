import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Donut extends Component {
  render() {
    const { id, flavor, price, description, image } = this.props;

    return (
      <span>
        <div className="donut-img" id={id}>
          <img src={image} alt="Donut" height="80" width="80" onClick={this.onShowClick}/>
          <h3 className="donut-name">{flavor}</h3>
          <h3 className="donut-name">${price}</h3>
        </div>
        <div className="donut-info">
          <p>{description}</p>
        </div>

        <Link to={'/show/' + id} className="">Show  </Link>
        <Link to={'/edit/' + id} className="">Edit</Link>

        <br />
        <br />

      </span>
    );
  }
}

export default Donut;

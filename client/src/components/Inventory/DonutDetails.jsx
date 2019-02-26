import React, { Component } from 'react';

class DonutDetails extends Component {
  render() {
    const { id, flavor, info, img } = this.props;

    return (
        <span>
          <div className="donut-img">
            <img src={img} alt="Donut" height="80" width="80"/>
            <h3 className="donut-flavor">{flavor}</h3>
            <h4 className="donut-price">{price}</h4>
          </div>
          <div className="donut-description">
            <p>{description}</p>
          </div>

        </span>
    );
  }
}

export default DonutDetails;

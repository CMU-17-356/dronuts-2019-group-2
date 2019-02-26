import React, { Component } from 'react';

class DonutShow extends Component {
  render() {
    // const { id, flavor, info, img } = this.props;

    return (
        <span>
          <div className="donut-img">
            <h3 className="donut-flavor">Glazed</h3>
            <h4 className="donut-price">$3</h4>
          </div>
          <div className="donut-description">
            <p>Classic glazed donut</p>
          </div>

        </span>
    );
  }
}

export default DonutShow;

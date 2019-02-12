import React, { Component } from 'react';
import Donut from './Donut.jsx';

import glazed from '../../img/glazed.jpg'
import chocofrosted from '../../img/chocofrosted.jpg'
import bostoncream from '../../img/bostoncream.jpg'


class ProductListingPage extends Component {
  
  
  render() {
    return (
      <div className="plp">
        <Donut
          id="1"
          name="Glazed"
          info="Classic glazed donut."
          img={glazed}
        />
        <Donut
          id="2"
          name="Chocolate-frosted"
          info="Frosted over with a rich, smooth chocolate ganache."
          img={chocofrosted}
        />
        <Donut
          id="3"
          name="Boston Cream"
          info="Boston cream pie in donut form."
          img={bostoncream}
        />
      </div>
    )
  }
}

export default ProductListingPage;
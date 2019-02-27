import React, { Component } from 'react';
import DonutForm from './DonutForm'


class DonutNew extends Component {
  render() {
    return (
      <DonutForm // new form so pass in blank props
        flavor=""
        price={0}
        numAvailable={0}
        picture=""
        description=""
      />
    );
  }
}

export default DonutNew;

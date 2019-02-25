import React, { Component } from 'react';
import { DonutForm } from './DonutForm.jsx'


class DonutNew extends Component {
  render() {
    return (
      <DonutForm
        new=false
      />
    );
  }
}

export default DonutNew;

import React, { Component } from 'react';

import monkey from './monkey1.png';

class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <img src={monkey}  alt="monkey island screenshot"/>
      </div>
    );
  }
}

export default Hero;

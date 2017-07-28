import React, { Component } from 'react';
import jslogo from './jslogo.png';

class AboutPanel extends Component {
  render() {
    return (
      <div className="AboutPanel">
        <div className="container">
          <div className="col-4">
            <img className="jslogo" src={jslogo}  alt="luke"/>
          </div>
          <div className="col-8">
            <p>My favourite thing is JavaScript, when I’m coding it, I feel like I’m in a sweet shop. You know, one of those old school ones with all the jars.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPanel;

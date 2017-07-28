import React, { Component } from 'react';
import CircleImage from './CircleImage';

class IntroPanel extends Component {
  render() {
    return (
      <div className="IntroPanel">
        <div className="container">
          <div className="col-6">
            <p className="larger">Oh hello there.<br />I'm <span className="regular">Luke Lehane</span>,<br />and I like to code.</p>
            <p>I really enjoy building sexy looking<br />User Interfaces that are a joy for<br />folks to click their mouse upon.</p>
          </div>
          <div className="col-6">
            <CircleImage />
          </div>
        </div>
      </div>
    );
  }
}

export default IntroPanel;

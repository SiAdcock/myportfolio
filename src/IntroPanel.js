import React, { Component } from 'react';

class IntroPanel extends Component {
  render() {
    return (
      <div className="IntroPanel">
        <p className="larger">Oh hello there.<br />I'm <span>Luke Lehane</span>,<br />and I like to code.</p>
        <p>I really enjoy building sexy looking<br />User Interfaces that are a joy for<br />folks to click their mouse upon.</p>
        <div className="red vert-line top"></div>
      </div>
    );
  }
}

export default IntroPanel;

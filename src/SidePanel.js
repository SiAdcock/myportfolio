import React, { Component } from 'react';

import Menu from './Menu';
import CircleImage from './CircleImage';

class SidePanel extends Component {
  render() {
    return (
      <div className="SidePanel">
        <CircleImage />
        <p className="intro-text">Front End Web Developer / Extreme Metal Connoisseur / Psychedelic Rock Appreciator / Amateur (very) Philosopher / Annihilator of Articulation.</p>
        <Menu />
      </div>
    );
  }
}

export default SidePanel;

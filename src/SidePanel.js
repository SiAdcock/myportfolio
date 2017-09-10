import React, { Component } from 'react';

import Menu from './Menu';
import CircleImage from './CircleImage';

import github from './octocatsmall.png';

class SidePanel extends Component {
  render() {
    return (
      <div className="SidePanel">
        <CircleImage />
        <p className="intro-text">Front End Web Developer / Extreme Metal Connoisseur / Psychedelic Rock Appreciator / Amateur (very) Philosopher / Annihilator of Articulation.</p>
        <Menu />
        <a href="https://github.com/lehanism" target="_blank" rel='noreferrer noopener'>
          <div className="social">
            <div className="social-text">
              <p>find me on github</p>
            </div>
            <img className="github" src={github} alt="octocat"></img>
          </div>
      </a>
      </div>
    );
  }
}

export default SidePanel;

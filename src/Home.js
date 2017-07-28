import React, { Component } from 'react';

import Menu from './Menu';
import IntroPanel from './IntroPanel';
import AboutPanel from './AboutPanel';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <IntroPanel />
        <AboutPanel />
      </div>
    );
  }
}

export default Home;

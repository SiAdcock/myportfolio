import React, { Component } from 'react';

import IntroPanel from './IntroPanel';
import ImagePanel from './ImagePanel';
import Menu from './Menu';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <IntroPanel />
        <ImagePanel />
        <Menu />
      </div>
    );
  }
}

export default Home;

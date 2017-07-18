import React, { Component } from 'react';

import IntroPanel from './IntroPanel';
import ImagePanel from './ImagePanel';
import BurgerMenu from './BurgerMenu';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <IntroPanel />
        <ImagePanel />
        <BurgerMenu />
      </div>
    );
  }
}

export default Home;

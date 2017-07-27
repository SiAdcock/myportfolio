import React, { Component } from 'react';

import Menu from './Menu';
import IntroPanel from './IntroPanel';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <IntroPanel />
      </div>
    );
  }
}

export default Home;

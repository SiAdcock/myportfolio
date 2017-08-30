import React, { Component } from 'react';

import IntroPanel from './IntroPanel';
import AboutPanel from './AboutPanel';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <IntroPanel />
        </div>
      </div>
    );
  }
}

export default Home;

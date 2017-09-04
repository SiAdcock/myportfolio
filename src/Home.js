import React, { Component } from 'react';

import SidePanel from './SidePanel';
import Page from './Page';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <SidePanel />
          <Page />
        </div>
      </div>
    );
  }
}

export default Home;

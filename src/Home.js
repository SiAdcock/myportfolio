import React, { Component } from 'react';

import SidePanel from './SidePanel';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <SidePanel />
        </div>
      </div>
    );
  }
}

export default Home;

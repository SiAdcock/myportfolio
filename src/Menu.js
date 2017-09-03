import React, { Component } from 'react';

import MenuLink from './MenuLink';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <MenuLink linkname="home" />
        <MenuLink linkname="now" />
        <MenuLink linkname="projects" />
        <MenuLink linkname="about" />
      </div>
    );
  }
}

export default Menu;

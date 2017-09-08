import React, { Component } from 'react';

import MenuLink from './MenuLink';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <MenuLink linkname="home" linkref="/" />
        <MenuLink linkname="now" linkref="/now"/>
        <MenuLink linkname="projects" linkref="/projects"/>
        <MenuLink linkname="about" linkref="/about"/>
      </div>
    );
  }
}

export default Menu;

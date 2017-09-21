import React, { Component } from 'react';

import MenuLink from './MenuLink';

class Menu extends Component {
  render() {
    return (
      <div className={"Menu "+this.props.isMobile}>
        <MenuLink linkname="home" linkref="/" />
        <MenuLink linkname="now" linkref="/now"/>
        <MenuLink linkname="projects" linkref="/projects"/>
      </div>
    );
  }
}

export default Menu;

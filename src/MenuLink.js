import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class MenuLink extends Component {
  render() {
    return (
      <NavLink exact to={this.props.linkref} activeClassName="cross--active">
        <div className="menu__link"><span className="cross">+ </span>{this.props.linkname}</div>
      </NavLink>
    );
  }
}

export default MenuLink;

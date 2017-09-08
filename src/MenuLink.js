import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class MenuLink extends Component {
  render() {
    return (
      <Link to={this.props.linkref}>
        <div className="menu__link"><span className="cross">+ </span>{this.props.linkname}</div>
      </Link>
    );
  }
}

export default MenuLink;

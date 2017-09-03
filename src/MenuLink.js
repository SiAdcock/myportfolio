import React, { Component } from 'react';

class MenuLink extends Component {
  render() {
    return (
      <div className="menu__link"><span className="cross">+ </span>{this.props.linkname}</div>
    );
  }
}

export default MenuLink;

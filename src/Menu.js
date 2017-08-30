import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="menu__link"><span className="cross cross--active">+ </span>home</div>
        <div className="menu__link"><span className="cross">+ </span>now</div>
        <div className="menu__link"><span className="cross">+ </span>projects</div>
        <div className="menu__link"><span className="cross">+ </span>about</div>
      </div>
    );
  }
}

export default Menu;

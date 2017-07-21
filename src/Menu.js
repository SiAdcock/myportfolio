import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="Menu__link">home</div>
        <div className="Menu__link">work</div>
        <div className="Menu__link">about</div>
        <div className="burger-menu">
          <div className="burger burger-1"></div>
          <div className="burger burger-2"></div>
          <div className="burger burger-3"></div>
        </div>
      </div>
    );
  }
}

export default Menu;

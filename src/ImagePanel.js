import React, { Component } from 'react';
import luke from './luke.png';

class ImagePanel extends Component {
  render() {
    return (
      <div className="ImagePanel">
        <img src={luke}  alt="luke"/>
        <div className="red vert-line bottom"></div>
      </div>
    );
  }
}

export default ImagePanel;

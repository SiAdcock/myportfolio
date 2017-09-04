import React, { Component } from 'react';

import Qpanel from './Qpanel';

class Page extends Component {
  render() {
    return (
      <div className="Page">
        <h1>Luke Lehane</h1>

        <p>I love coding and I love great looking, clean design. I have skills in HTML5, CSS3, JavaScript and PHP and am currently looking to develop them in a big way. I am extremely passionate about the power of the Internet and very much want to be a part of its future. I'm excited about keeping up to date with the latest web trends and concepts. In my spare time I am enjoying diving into modern Javascript and I am looking forward to coding some exciting projects!</p>
        
        <Qpanel />
      </div>
    );
  }
}

export default Page;

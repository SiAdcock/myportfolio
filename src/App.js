import React, { Component } from 'react';

import { Route } from 'react-router-dom'

import './App.css';

import SidePanel from './SidePanel';
import Home from './Home';
import Now from './Now';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <SidePanel />
          <Route exact path="/" component={Home}/>
          <Route path="/now" component={Now}/>

        </div>
      </div>
    );
  }
}

export default App;

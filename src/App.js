import React, { Component } from 'react';

import { Route } from 'react-router-dom'

import './App.css';

import SidePanel from './SidePanel';
import Page from './Page';
import Qpanel from './Qpanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <SidePanel />
          <Route exact path="/" component={Page}/>
          <Route path="/now" component={Page}/>

          {/* <Page>

            <Qpanel
              Qtext="Thank you for not making my design look like dog shite"
              Qauthor="a designer to me"
            />
          </Page> */}
        </div>
      </div>
    );
  }
}

export default App;

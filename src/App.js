import React from 'react';

import { Route, withRouter, Switch } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './App.css';

import ScrollToTop from './ScrollToTop';
import SidePanel from './SidePanel';
import Home from './Home';
import Now from './Now';

const App = withRouter(({ location }) => (
   <div className="App">
      <div className="container">
        <SidePanel />
        <ScrollToTop>
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={{ enter: 1000, exit: 1000 }}>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/now" component={Now}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </ScrollToTop>
      </div>
    </div>
))

export default App;

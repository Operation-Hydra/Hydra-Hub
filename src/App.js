//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// DOM bindings for React Router
import { BrowserRouter as Router } from 'react-router-dom';

//> Components
/**
 * Nav: Global navigation bar
 * Footer: Global Footer
 */
import { Nav, Footer } from './components/molecules';
// Routes
import Routes from './Routes';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="flyout">
          <Nav/>
          <main>
            <Routes />
          </main>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */

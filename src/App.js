import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import NavHeader from './NavHeader/NavHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={NavHeader} />
        test
      </div>
    );
  }
}

export default App;

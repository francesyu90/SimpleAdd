import React, { Component } from 'react';
import './App.css';
import DisplayEquation from './components/DisplayEquation';

class App extends Component {
  render() {
    return (
      <div className="app">
        <DisplayEquation />
      </div>
    );
  }
}

export default App;

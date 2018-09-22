import React, { Component } from 'react';
import './App.css';
import DisplayEquation from './components/DisplayEquation';

class App extends Component {

  state = {
      x: Math.floor(Math.random() * 101),
      y: Math.floor(Math.random() * 101),
      z: Math.floor(Math.random() * 101),
  }

  computeSum = (x, y, z) => (x + y + z);

  generateDisplayResult() {

      if(Math.floor((Math.random() * 10) + 1) % 2 == 0) {
          return this.computeSum(this.state.x, this.state.y, this.state.z)
      } else {
          return Math.floor(Math.random() * 301);
      }
  }

  render() {
    return (
      <div className="app">
        <DisplayEquation x={this.state.x} y={this.state.y} z={this.state.z} r={this.generateDisplayResult()} />
      </div>
    );
  }
}

export default App;

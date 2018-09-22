import React, { Component } from 'react';
import './App.css';
import DisplayEquation from './components/DisplayEquation';
import UserInput from './components/UserInput';

class App extends Component {

  state = {
      x: Math.floor(Math.random() * 101),
      y: Math.floor(Math.random() * 101),
      z: Math.floor(Math.random() * 101),
      userInput: ''
  }

  computeSum = (x, y, z) => (x + y + z);

  generateDisplayResult(x, y, z) {

      if(Math.floor((Math.random() * 10) + 1) % 2 === 0) {
          return this.computeSum(x, y, z)
      } else {
          return Math.floor(Math.random() * 301);
      }
  }

  generateExpectedOutput(x, y, z) {
    return (this.computeSum(x, y, z) === this.generateDisplayResult(x, y, z))? '1': '0';
  }

  getUserInput = (uInput) => (
    this.setState({userInput: uInput})
  )

  render() {

    const { x, y, z } = this.state;

    return (

      <div className="app">

        <DisplayEquation 
          x={x} 
          y={y} 
          z={z} 
          r={this.generateDisplayResult(x, y, z)} 
        />

        <UserInput 
          getUserInput={this.getUserInput}
        />

        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;

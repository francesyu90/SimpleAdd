import React, { Component } from 'react';
import './App.css';
import DisplayEquation from './components/DisplayEquation';
import UserInput from './components/UserInput';

class App extends Component {

  state = {
      userInput: '-1',
      expectedAnswer: '0'
  }

  getUserInput = (uInput) => (
    this.setState({userInput: uInput})
  )

  getExpectedAnswer = (eAnswer) => (
    this.setState({expectedAnswer: eAnswer})
  )

  render() {

    return (

      <div className="app">

        <DisplayEquation
          getExpectedAnswer={this.getExpectedAnswer}
        />

        <UserInput 
          getUserInput={this.getUserInput}
        />

        <p>
          User Choice: {this.state.userInput}
          <br></br>
          Expected Answer: {this.state.expectedAnswer}
        </p>
      </div>
    );
  }
}

export default App;

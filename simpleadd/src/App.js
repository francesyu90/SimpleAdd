import React, { Component } from 'react';
import './App.css';
import DisplayEquation from './components/DisplayEquation';
import UserInput from './components/UserInput';
import DisplayResult from './components/DisplayResult';

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

        <DisplayResult userInput={this.state.userInput} expectedAnswer={this.state.expectedAnswer} />
      </div>
    );
  }
}

export default App;

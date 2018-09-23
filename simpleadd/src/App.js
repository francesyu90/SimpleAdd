import React, { Component } from 'react';
import './App.css';
import DisplayEquation from './components/DisplayEquation';
import UserInput from './components/UserInput';
import DisplayResult from './components/DisplayResult';
import PropTypes from 'prop-types'

class App extends Component {

  state = {
      userInput: '-1',
      expectedAnswer: '0',
      score: 0
  }

  getUserInput = (uInput) => (
    this.setState({userInput: uInput})
  )

  getExpectedAnswer = (eAnswer) => (
    this.setState({expectedAnswer: eAnswer})
  )

  updateScore = () => {
    this.setState((currentState) => ({
      score: currentState.score + 1
    }));
  }

  render() {

    return (

      <div className="app">

        <DisplayEquation
          getExpectedAnswer={this.getExpectedAnswer}
        />

        <UserInput 
          getUserInput={this.getUserInput}
        />

        <DisplayResult 
          userInput={this.state.userInput} 
          expectedAnswer={this.state.expectedAnswer} 
        />

        <p>Score: {this.state.score}</p>
      </div>
    );
  }
}

App.propTypes = {

  userInput: PropTypes.string,
  expectedAnswer: PropTypes.string,
  getExpectedAnswer: PropTypes.func,
  getUserInput: PropTypes.func
}

export default App;

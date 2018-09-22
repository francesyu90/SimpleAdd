import React, { Component } from 'react';

class DisplayResult extends Component {

    evaluateResult() {

        if (this.props.userInput === '-1') {
            return "User input is not available"
        }

        return (this.props.expectedAnswer === this.props.userInput)? 
            "Correct" : "Wrong";
    }

    render() {
        return(
            <div>
                <p>
                    {this.evaluateResult()}
                </p>
            </div>
        );
    }
}

export default DisplayResult;
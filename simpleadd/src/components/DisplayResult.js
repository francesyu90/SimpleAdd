import React, { Component } from 'react';

class DisplayResult extends Component {

    render() {
        return(
            <div>
                <p>
                    User Choice: {this.props.userInput}
                    <br></br>
                    Expected Answer: {this.props.expectedAnswer}
                </p>
            </div>
        );
    }
}

export default DisplayResult;
import React, { Component } from 'react';

class DisplayEquation extends Component {

    state = {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101),
        z: Math.floor(Math.random() * 101)
    }
  
    computeSum = (x, y, z) => (x + y + z);
  
    generateDisplayResult(x, y, z) {
  
        if(Math.floor((Math.random() * 10) + 1) % 2 === 0) {
            return this.computeSum(x, y, z)
        } else {
            return Math.floor(Math.random() * 301);
        }
    }

    componentDidMount() {

        const { x, y, z } = this.state;

        this.props.getExpectedAnswer(
            (this.generateDisplayResult(x, y, z) === this.computeSum(x, y, z))? '1':'0'
        );
    }

    render() {

        const { x, y, z } = this.state;

        return(
            <div className="displayEquation">
                <h1>
                    {x} 
                    <span className="operators"> + </span>
                    {y} 
                    <span className="operators"> + </span>
                    {z} 
                    <span className="operators"> = </span>
                    <span className="result"> {this.generateDisplayResult(x, y, z)} </span>
                </h1>
            </div>
        );
    }
}

export default DisplayEquation;
import React, { Component } from 'react';

class DisplayEquation extends Component {

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
        return(
            <div className="displayEquation">
                <p>
                    {this.state.x} + {this.state.y} + {this.state.z} =  {this.generateDisplayResult()}
                </p>
            </div>
        );
    }
}

export default DisplayEquation;
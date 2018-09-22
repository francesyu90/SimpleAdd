import React, { Component } from 'react';

class DisplayEquation extends Component {

    state = {
        x: 3,
        y: 4,
        z: 5,
        p: 12
    }

    render() {
        return(
            <div className="displayEquation">
                <p>{this.state.x} + {this.state.y} + {this.state.z} = {this.state.p}</p>
            </div>
        );
    }

}

export default DisplayEquation;
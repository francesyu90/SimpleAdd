import React, { Component } from 'react';

class DisplayEquation extends Component {

    render() {
        return(
            <div className="displayEquation">
                <h1>
                    {this.props.x} 
                    <span className="operators"> + </span>
                    {this.props.y} 
                    <span className="operators"> + </span>
                    {this.props.z} 
                    <span className="operators"> = </span>
                    <span className="result"> {this.props.r} </span>
                </h1>
            </div>
        );
    }
}

export default DisplayEquation;
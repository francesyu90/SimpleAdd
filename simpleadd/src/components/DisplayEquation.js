import React, { Component } from 'react';

class DisplayEquation extends Component {

    render() {
        return(
            <div className="displayEquation">
                <p>
                    {this.props.x} + {this.props.y} + {this.props.z} =  {this.props.r}
                </p>
            </div>
        );
    }
}

export default DisplayEquation;
import React, { Component } from 'react';

class DisplayEquation extends Component {

    constructor(props) {

        super(props);

        const x = Math.floor(Math.random() * 101)
        const y = Math.floor(Math.random() * 101)
        const z = Math.floor(Math.random() * 101)
        const displayResult = this.generateDisplayResult(x, y, z);

        this.state = {
            x: x,
            y: y,
            z: z,
            p: displayResult
        }
    }

    handleUpdate = () => (
        this.setState({
            x: Math.floor(Math.random() * 101),
            y: Math.floor(Math.random() * 101),
            z: Math.floor(Math.random() * 101)
        })
    )

    updateHandler = () => (
        this.handleUpdate.bind(this)
    )
  
    computeSum = (x, y, z) => (x + y + z);
  
    generateDisplayResult(x, y, z) {
  
        if(Math.floor((Math.random() * 10) + 1) % 2 === 0) {
            return this.computeSum(x, y, z)
        } else {
            return Math.floor(Math.random() * 301);
        }
    }

    componentDidMount() {

        const { x, y, z, p } = this.state;

        this.props.getExpectedAnswer((p === this.computeSum(x, y, z))? '1':'0');
    }

    render() {

        const { x, y, z, p} = this.state;

        return(
            <div className="displayEquation">
                <h1>
                    {x} 
                    <span className="operators"> + </span>
                    {y} 
                    <span className="operators"> + </span>
                    {z} 
                    <span className="operators"> = </span>
                    <span className="result"> {p} </span>
                </h1>
            </div>
        );
    }
}

export default DisplayEquation;
import React, { Component } from 'react';
import { Radio, FormGroup, ControlLabel, Button } from 'react-bootstrap';

const json = {
    question: 'Is the above equation correct?',
    choices:
    [
      { text: 'Yes', value: '1' },
      { text: 'No', value: '0' }
    ]
  }

class UserInput extends Component {

    state = {
        value: '',
        score: 0
    }

    handleChange(event) {
        this.setState({value: event.currentTarget.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.getUserInput(this.state.value)
    }

    render() {
        return(
            <div>
                <form>
                    <FormGroup>

                        <ControlLabel> 
                            {json.question}
                        </ControlLabel>

                        <br></br>

                        {json.choices.map((choice) => (

                            <Radio 
                                name="userResponse" 
                                inline 
                                onClick={this.handleChange.bind(this)} 
                                key={choice.value}
                                value={choice.value}
                            > 
                             {choice.text} 
                            </Radio>
                        ))}
                    </FormGroup>

                    <Button 
                        type="submit" 
                        bsStyle="primary" 
                        onClick={this.handleSubmit.bind(this)
                    }
                        >Submit
                    </Button>
                </form>
            </div>
        );
    }
}

export default UserInput;
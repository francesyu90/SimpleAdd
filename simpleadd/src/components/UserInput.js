import React, { Component } from 'react';
import { Radio, FormGroup, ControlLabel, Button } from 'react-bootstrap';

class UserInput extends Component {

    render() {
        return(
            <div>
                <form>
                    <FormGroup>
                        <ControlLabel> 
                            Is the above equation correct or incorrect?
                        </ControlLabel>
                        <br></br>
                        <Radio name="radioGroup" inline> Correct </Radio>
                        <Radio name="radioGroup" inline> Incorrect </Radio>
                    </FormGroup>
                    <Button type="submit" bsStyle="primary">Submit</Button>
                </form>
            </div>
        );
    }
}

export default UserInput;
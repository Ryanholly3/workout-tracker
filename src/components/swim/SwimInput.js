import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import '../../App.css';

class SwimInput extends Component {

  formSubmit =() =>{
    //post request
  }

  render() {
    return (
      <Segment raised>
        <h3>Record a swim</h3>
        <Form>
          <Form.Field required>
            <label>Date</label>
            <Input type='date' />
          </Form.Field>
          <Form.Field required>
            <label>Distance (yards)</label>
            <Input type="number" min="25" step="25" placeholder='distance in yards' />
          </Form.Field>
          <Form.Field required>
            <label>Difficulty</label>
            <Input type="number" min="1" max="10" step="1" placeholder='difficulty 1-10' />
          </Form.Field>
          <Form.Field
            id='form-textarea-control-notes'
            control={TextArea}
            label='Notes'
            placeholder='Notes about workout'
          />
          <Button type='submit' onClick={ this.formSubmit }>Submit</Button>
        </Form>
      </Segment>
    );
  }
}

export default SwimInput;

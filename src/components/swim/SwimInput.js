import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import { Form, Input, TextArea } from 'semantic-ui-react';
import '../../App.css';

class SwimInput extends Component {

  render() {
    return (
      <Segment raised>
        <h3>Record a swim</h3>
        <Form>
          <Form.Field required>
            <label>Distance</label>
            <Input placeholder='in yards...' />
          </Form.Field>
          <Form.Field required>
            <label>Difficulty</label>
            <Input placeholder='Yardage...' />
          </Form.Field>
          <Form.Field>
            <label>Other</label>
            <Input placeholder='Other...' />
          </Form.Field>
          <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            label='Notes'
            placeholder='Notes'
          />
        </Form>
      </Segment>
    );
  }
}

export default SwimInput;

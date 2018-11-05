import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import '../../App.css';

class SwimInput extends Component {

  render() {
    return (
      <Container>
        <div className="swim-input">
          <h2>Swim Input</h2>
        </div>
      </Container>
    );
  }
}

export default SwimInput;

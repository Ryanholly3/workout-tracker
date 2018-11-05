import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import '../../App.css';

class RunSummary extends Component {

  render() {
    return (
      <Container className="run-summary">
        <h1>Run Summary</h1>
      </Container>
    );
  }
}

export default RunSummary;

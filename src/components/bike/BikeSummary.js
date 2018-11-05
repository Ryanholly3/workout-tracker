import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import '../../App.css';

class BikeSummary extends Component {

  render() {
    return (
      <Container className="bike-summary">
        <h1>Bike Summary</h1>
      </Container>
    );
  }
}

export default BikeSummary;

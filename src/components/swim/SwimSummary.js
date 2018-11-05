import React, { Component } from 'react';
import SwimList from './SwimList';
import SwimInput from './SwimInput';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import '../../App.css';

class SwimSummary extends Component {

  render() {
    return (
      <Container>
        <div>
          <Image src='https://via.placeholder.com/150' avatar />
          <span>USERNAME</span>
        </div>
        <h2>Swimming</h2>
        <div className="swim-summary">
          <SwimList />
          <SwimInput />
        </div>
      </Container>
    );
  }
}

export default SwimSummary;
